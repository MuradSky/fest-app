import { memo } from 'react';
import styles from './PersonalCard.module.scss';
import Image from "next/image";
import Title from "@/components/ui/title";
import classNames from "classnames";

interface Props {
    image: string;
    name: string;
    desc: string;
    className?: string;
}

export const PersonalCard = ({ name, image, desc, className }: Props) => {
    return (
        <div className={classNames(styles.card, className)}>
            <div className={styles.image}>
                <Image src={image} alt="" width={225} height={260} />
            </div>
            <div className={styles.body}>
                <Title as="h3" dangerouslySetInnerHTML={{__html: name}} />
                <div className={styles.text} dangerouslySetInnerHTML={{__html: desc}} />
            </div>
        </div>
    );
};

export default memo(PersonalCard)