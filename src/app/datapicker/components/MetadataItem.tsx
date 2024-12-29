import styles from "./MetadataItem.module.css";

interface MetadataItemProps {
    label: string;
    value: any;
}

export function MetadataItem({ label, value }: MetadataItemProps) {
    return (
        <div className={styles.item}>
            <span className={styles.label}>{label}:</span>
            <span className={styles.value}>{String(value)}</span>
        </div>
    );
}
