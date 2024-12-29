declare module "exif-parser" {
    interface ExifTags {
        [key: string]: any;
    }

    interface ExifResult {
        tags: ExifTags;
    }

    interface Parser {
        parse(): ExifResult;
    }

    interface ExifParser {
        create(buffer: ArrayBuffer): Parser;
    }

    const exifParser: ExifParser;
    export default exifParser;
}
