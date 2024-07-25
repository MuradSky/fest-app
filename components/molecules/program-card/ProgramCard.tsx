import {memo, useState} from 'react';
import styles from './ProgramCard.module.scss';
import classNames from "classnames";

interface Props {
    className?: string;
    data: {
        title: string;
        headDate: string;
        bodyDate: string;
        list: string;
    }
}

const ProgramCard = ({ className, data }: Props) => {
    const [toggle, setToggle] = useState(false);
    const cssClasses = classNames(styles.card, className);

    return (
        <div className={className}>
            <div className={styles.head} onChange={()=> setToggle(!toggle)}>
                <div className={styles.date}>{data.title}</div>
                <div className={styles.text}>{data.headDate}</div>
            </div>
            <div className={styles.body}>
                <div className={styles.col}>
                    <div className={styles.text}>{data.bodyDate}</div>
                </div>
                <div className={styles.col}>
                    <ul className={styles.list} dangerouslySetInnerHTML={{__html: data.list}} />
                </div>
            </div>
        </div>
    );
};

export default memo(ProgramCard);