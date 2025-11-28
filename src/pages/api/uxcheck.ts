import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// Function to request ChatGPT analysis using OpenAI's API
async function requestChatGPTAnalysis(url: string) {
    const openAIUrl = "https://api.openai.com/v1/chat/completions";
    const apiKey = process.env.OPENAI_API_KEY; // Ensure you have the API key in your environment variables

    const prompt = `
        Analyze the UX of the following webpage: ${url}.
        Identify potential issues with accessibility, responsiveness, and design.
        Suggest improvements based on UX best practices.
    `;

    const response = await axios.post(
        openAIUrl,
        {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are an expert UX designer." },
                { role: "user", content: prompt },
            ],
            temperature: 0.7,
        },
        {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
        }
    );

    const chatGPTAnalysis = response.data.choices[0].message.content;
    // Return the ChatGPT response with empty feedback if not enough data is found
    return {
        feedback: [chatGPTAnalysis],
        locations: [], // ChatGPT might not provide specific locations, so we leave this empty
    };
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        console.log("Requesting ChatGPT analysis...");

        // Try requesting analysis from ChatGPT
        const chatGPTResponse = await requestChatGPTAnalysis(url);
        return res.status(200).json({
            success: true,
            feedback: chatGPTResponse.feedback,
            locations: chatGPTResponse.locations,
            message: "Page analyzed successfully using ChatGPT",
        });
    } catch (error) {
        console.log(
            "ChatGPT analysis failed, falling back to manual analysis..."
        );

        try {
            // Fetch the HTML content using Axios
            const response = await axios.get(url);
            const pageContent = response.data;

            // Call the manual analysis function to get feedback based on content
            const manualFeedback = analyzeUXManually(pageContent);

            return res.status(200).json({
                success: true,
                feedback: manualFeedback.feedback,
                locations: manualFeedback.locations,
                message: "Page analyzed successfully with fallback method",
            });
        } catch (manualError) {
            console.error(
                "Error during fallback manual page analysis:",
                manualError
            );

            return res.status(500).json({
                error: "Failed to analyze the page due to an internal error.",
            });
        }
    }
}

// Manual UX analysis function with 30 conditions
function analyzeUXManually(htmlContent: string): {
    feedback: string[];
    locations: string[];
} {
    const feedback: string[] = [];
    const locations: string[] = [];

    // Return a default message if no HTML content is available
    if (!htmlContent) {
        feedback.push("No content available for manual analysis.");
        locations.push("No content was retrieved for analysis.");
        return { feedback, locations };
    }

    const formatLocations = (tags: string[]): string => {
        const formatted = tags.slice(0, 10).join(", ");
        if (formatted.length > 150) {
            return formatted.slice(0, 150) + " ...";
        } else if (tags.length > 10) {
            return formatted + ", ...";
        }
        return formatted;
    };

    // 1. Missing Alt Text on Images
    const imgTags = extractTag(htmlContent, "img");
    const imgLocations: string[] = [];
    imgTags.forEach((tag) => {
        if (!tag.includes("alt=")) {
            imgLocations.push(tag);
        }
    });
    if (imgLocations.length > 0) {
        feedback.push("Missing alt attribute in image tag.");
        locations.push(formatLocations(imgLocations));
    }

    // 2. Form Elements without Labels
    const inputTags = extractTag(htmlContent, "input");
    const inputLocations: string[] = [];
    inputTags.forEach((tag) => {
        if (!htmlContent.includes("<label")) {
            inputLocations.push(tag);
        }
    });
    if (inputLocations.length > 0) {
        feedback.push("Form input without label.");
        locations.push(formatLocations(inputLocations));
    }

    // 3. Small Font Sizes
    const fontLocations: string[] = [];
    const styleTags = extractTag(htmlContent, "style");
    styleTags.forEach((style) => {
        if (style.includes("font-size") && style.includes("12px")) {
            fontLocations.push(style);
        }
    });
    if (fontLocations.length > 0) {
        feedback.push("Small font size detected.");
        locations.push(formatLocations(fontLocations));
    }

    // 4. Low Contrast Issues
    const contrastLocations: string[] = [];
    styleTags.forEach((style) => {
        if (style.includes("color") && style.includes("#fff")) {
            contrastLocations.push(style);
        }
    });
    if (contrastLocations.length > 0) {
        feedback.push("Low contrast detected.");
        locations.push(formatLocations(contrastLocations));
    }

    // 5. Missing Meta Tags
    const metaLocations: string[] = [];
    if (
        !htmlContent.includes('<meta name="description"') ||
        !htmlContent.includes('<meta name="viewport"')
    ) {
        metaLocations.push("<meta> tags missing in the <head> section.");
        feedback.push("Missing important meta tags.");
        locations.push(formatLocations(metaLocations));
    }

    // 6. Missing H1 Tag
    if (!htmlContent.includes("<h1")) {
        feedback.push("Missing <h1> tag.");
        locations.push("No <h1> tag found");
    }

    // 7. Button Size Issue
    const buttonLocations: string[] = [];
    styleTags.forEach((style) => {
        if (style.includes("button") && style.includes("width: 44px")) {
            buttonLocations.push(style);
        }
    });
    if (buttonLocations.length > 0) {
        feedback.push("Button size too small (should be at least 44x44px).");
        locations.push(formatLocations(buttonLocations));
    }

    // 8. Missing ARIA Roles
    const ariaTags = extractTag(htmlContent, "button");
    const ariaLocations: string[] = [];
    ariaTags.forEach((tag) => {
        if (!tag.includes("role=")) {
            ariaLocations.push(tag);
        }
    });
    if (ariaLocations.length > 0) {
        feedback.push("Missing ARIA roles in interactive elements.");
        locations.push(formatLocations(ariaLocations));
    }

    // 9. Text Readability Issues
    const smallTextLocations: string[] = [];
    styleTags.forEach((style) => {
        if (style.includes("font-size") && parseInt(style.split(":")[1]) < 14) {
            smallTextLocations.push(style);
        }
    });
    if (smallTextLocations.length > 0) {
        feedback.push("Text readability issues (font size too small).");
        locations.push(formatLocations(smallTextLocations));
    }

    // 10. Touch Target Size Too Small
    const touchTargetLocations: string[] = [];
    styleTags.forEach((style) => {
        if (
            (style.includes("a") || style.includes("button")) &&
            style.includes("width: 30px")
        ) {
            touchTargetLocations.push(style);
        }
    });
    if (touchTargetLocations.length > 0) {
        feedback.push(
            "Touch target size too small (should be at least 44x44px)."
        );
        locations.push(formatLocations(touchTargetLocations));
    }

    // 11. Missing Skip to Content Link
    if (!htmlContent.includes('href="#main-content"')) {
        feedback.push("Missing skip to content link.");
        locations.push("No skip-to-content link found");
    }

    // 12. Missing Title Tag
    if (!htmlContent.includes("<title>")) {
        feedback.push("Missing <title> tag.");
        locations.push("No <title> tag found");
    }

    // 13. Missing Language Attribute
    if (!htmlContent.includes('lang="')) {
        feedback.push("Missing lang attribute in <html> tag.");
        locations.push("<html> tag missing lang attribute");
    }

    // 14. Missing Favicon
    if (!htmlContent.includes('<link rel="icon"')) {
        feedback.push("Missing favicon.");
        locations.push("No favicon found in <head>");
    }

    // 15. Autoplaying Media Detected
    if (htmlContent.includes("autoplay")) {
        feedback.push("Autoplaying media detected.");
        locations.push("Media with autoplay attribute");
    }

    // 16. Empty Links Detected
    const linkTags = extractTag(htmlContent, "a");
    const emptyLinks = linkTags.filter(
        (tag) => !tag.includes(">") || tag.includes("></a>")
    );
    if (emptyLinks.length > 0) {
        feedback.push("Empty links detected.");
        locations.push(formatLocations(emptyLinks));
    }

    // 17. Broken Links
    const suspiciousLinks = linkTags.filter(
        (tag) =>
            tag.includes('href="#"') ||
            tag.includes('href="javascript:void(0);"')
    );
    if (suspiciousLinks.length > 0) {
        feedback.push(
            "Suspicious links detected (e.g., '#' or 'javascript:void(0)')."
        );
        locations.push(formatLocations(suspiciousLinks));
    }

    // 18. Text Contrast Issues (light text on white background)
    styleTags.forEach((style) => {
        if (
            style.includes("color: #fff") &&
            style.includes("background-color: #fff")
        ) {
            feedback.push(
                "Text contrast issue (white text on white background)."
            );
            locations.push(style);
        }
    });

    // 19. Text Too Dense
    styleTags.forEach((style) => {
        if (
            style.includes("line-height") &&
            parseFloat(style.split(":")[1]) < 1.2
        ) {
            feedback.push("Text is too dense (line height too small).");
            locations.push(style);
        }
    });

    // 20. Text Too Wide
    styleTags.forEach((style) => {
        if (
            style.includes("max-width: 100%") ||
            style.includes("width: 100vw")
        ) {
            feedback.push("Text spans too wide on larger screens.");
            locations.push(style);
        }
    });

    // 21. Missing Alt Text for Buttons
    const buttonImages = extractTag(htmlContent, "button img");
    buttonImages.forEach((tag) => {
        if (!tag.includes("alt=")) {
            feedback.push("Missing alt text for button images.");
            locations.push(tag);
        }
    });

    // 22. Input Fields with Placeholder as Label
    inputTags.forEach((tag) => {
        if (tag.includes("placeholder") && !htmlContent.includes("<label")) {
            feedback.push("Input fields relying on placeholder as label.");
            locations.push(tag);
        }
    });

    // 23. Overuse of Bold Text
    const boldText = extractTag(htmlContent, "strong");
    if (boldText.length > 10) {
        feedback.push("Overuse of bold text detected.");
        locations.push(formatLocations(boldText));
    }

    // 24. Too Many Scripts
    const scriptTags = extractTag(htmlContent, "script");
    if (scriptTags.length > 10) {
        feedback.push(
            "Too many scripts detected, which may slow down the page."
        );
        locations.push(formatLocations(scriptTags));
    }

    // 25. Missing Breadcrumbs
    if (!htmlContent.includes('<nav aria-label="breadcrumb"')) {
        feedback.push("Breadcrumb navigation missing.");
        locations.push("No breadcrumbs found.");
    }

    // 26. Missing Responsive Design Tags
    if (!htmlContent.includes('<meta name="viewport"')) {
        feedback.push("Missing viewport meta tag for responsive design.");
        locations.push('No <meta name="viewport"> found.');
    }

    // 27. Deprecated HTML Tags Detected
    const deprecatedTags = extractTag(htmlContent, "marquee, font");
    if (deprecatedTags.length > 0) {
        feedback.push("Deprecated HTML tags detected.");
        locations.push(formatLocations(deprecatedTags));
    }

    // 28. Forms without Validation
    const formTags = extractTag(htmlContent, "form");
    formTags.forEach((tag) => {
        if (!htmlContent.includes("required")) {
            feedback.push(
                "Form without validation (missing 'required' attribute)."
            );
            locations.push(tag);
        }
    });

    // 29. Missing Back to Top Button
    if (!htmlContent.includes('href="#top"')) {
        feedback.push("Missing back-to-top button.");
        locations.push("No back-to-top button found");
    }

    // 30. Inconsistent Heading Structure
    if (htmlContent.includes("<h2") && !htmlContent.includes("<h1")) {
        feedback.push(
            "Inconsistent heading structure (Missing <h1> before <h2>)."
        );
        locations.push("Found <h2> tag before <h1>");
    }

    return { feedback, locations };
}

// Helper function to extract specific HTML tags
function extractTag(html: string, tagName: string): string[] {
    const regex = new RegExp(`<${tagName}[^>]*>`, "g");
    return html.match(regex) || [];
}
