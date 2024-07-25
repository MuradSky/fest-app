import { memo } from 'react';
import Title from "@/components/ui/title";
import styles from './Gain.module.scss';
import Text from "@/components/ui/text";
import Image from "next/image";

interface Model  {
    id: number;
    icon: string;
    text: string;
}

const data: Model[] = [
    { id: 1, icon: '/svg/gain/1.svg', text: 'Experience in co-designing an abundant future of conscious entrepreneurship ecosystem' },
    { id: 2, icon: '/svg/gain/2.svg', text: 'How to harmoniously integrate their business into this future, considering AI and Web4 trends' },
    { id: 3, icon: '/svg/gain/3.svg', text: 'How to build companies for the ages' },
    { id: 4, icon: '/svg/gain/4.svg', text: 'Body and breathing practices for relaxation and focus.' },
    { id: 5, icon: '/svg/gain/5.svg', text: 'Healthy holidays and outdoor activities.' },
    { id: 6, icon: '/svg/gain/6.svg', text: 'Networking in the company of successful entrepreneurs with similar values.' },
]

const Gain = () => {
    return (
        <div className={styles.block}>
            <Title as="h2">Participants will gain:</Title>

            <ul className={styles.list}>
                {data.map((item: Model)=> (
                    <li key={item.id} className={styles.card}>
                        <Image src={item.icon} alt="" width={44} height={44} />
                        <Text>{item.text}</Text>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default memo(Gain);