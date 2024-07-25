import { memo } from 'react';
import styles from './Participation.module.scss';
import Title from "@/components/ui/title";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";
import PriceCard from "@/components/molecules/price-card";

const Participation = () => {
    return (
        <div className={styles.block}>
            <div className={styles.flex}>
                <div className={styles.col}>
                    <Title as="h2" className={styles.title}>Participation <br/> Cost:</Title>
                    <Text className={styles.text}>The price includes accommodation in a double room at Nurmuža Hotel, meals, participation in the programme.</Text>
                    <Button className={styles.btn}>Register</Button>
                </div>
                <div className={styles.col}>
                    <PriceCard price="€460" date="if paid by the end of July 2024" />
                    <PriceCard price="€460" date="if paid from 1 August" />
                </div>
            </div>
        </div>
    );
};

export default memo(Participation)