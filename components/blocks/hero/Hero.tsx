import { memo } from 'react';
import styles from './Hero.module.scss';
// import Title from "@/components/ui/title";
import Image from "next/image";
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";
import Text from "@/components/ui/text";
import Brands from "@/components/molecules/brands";

const Hero = () => {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.img}>
                    <Image src="/images/hero.png" alt="" width={1920} height={785}/>
                </div>

                <div className={styles.content}>
                    <div className="container">
                        <Title as="h4" className={styles.supTitle}>Creative Festival of</Title>
                        <Title className={styles.title}>
                            Abundant Future <br/> Design and Mindfulness <br/>Practices in Business
                        </Title>
                        <div className={styles.flex}>
                            <Button className={styles.btn}>Register</Button>
                            <Text isRaleway className={styles.date}>16-18 august | Nurmuižas viesnīca</Text>
                        </div>

                        <Brands className={styles.brands}/>
                    </div>
                </div>
            </div>

            <div className={styles.misson}>
                <div className={styles.wrap}>
                    <div className={styles.col}>
                        <Title as="h2">Mission:</Title>
                        <Title as="h4">
                            Unite awakened leaders and channel their <br />
                            energy into the evolution of collective <br />
                            consciousness - shared worldview that allows to
                        </Title>

                        <ul className={styles.list}>
                            <li>Relax and be in the moment</li>
                            <li>Care for an abundant future for self, society and nature</li>
                            <li>Demonstrate desired behaviour rather than struggle</li>
                        </ul>
                    </div>
                    <div className={styles.play}>
                        <Image src="/svg/play.svg" alt="" width={116} height={116} />
                        <Title as="h4">watch the teaser</Title>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Hero);