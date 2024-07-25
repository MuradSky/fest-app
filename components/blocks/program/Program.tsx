import { memo } from 'react';
import styles from './Program.module.scss';
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";

const Program = () => {
    return (
        <div className={styles.block}>
            <Title as="h2" className={styles.title}>Program:</Title>

            <div className={styles.content}>

            </div>
            <Button>Register</Button>
        </div>
    );
};

export default memo(Program)