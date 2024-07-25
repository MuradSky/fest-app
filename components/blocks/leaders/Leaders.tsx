import { memo } from 'react';
import styles from './Leaders.module.scss';
import Title from "@/components/ui/title";

const Leaders = () => {
    return (
        <div className={styles.block}>
            <Title as="h2">Speakers and Leaders:</Title>
        </div>
    );
};

export default memo(Leaders);