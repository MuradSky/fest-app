import { memo } from 'react';
import classNames from "classnames";
import styles from './Brands.module.scss';
import Image from "next/image";

interface Props {
    className?: string;
}

const data = [
    {
        width: 140,
        height: 40,
        src: '/images/brands/brand-s-1.png',
    },
    {
        width: 215,
        height: 40,
        src: '/images/brands/brand-s-2.png',
    },
    {
        width: 35,
        height: 40,
        src: '/images/brands/brand-s-3.png',
    },
    {
        width: 160,
        height: 40,
        src: '/images/brands/brand-s-4.png',
    },
    {
        width: 164,
        height: 40,
        src: '/images/brands/brand-s-5.png',
    },
]

const Brands = ({ className, variant }: Props) => {
    const cssCLasses = classNames(
        className,
        styles.brands
    );

    return (
        <div className={cssCLasses}>
            {
                data.map((item: { width: number, height: number, src: string }, i: number) => (
                    <div key={i} className={styles.img}>
                        <Image src={item.src} alt="" width={item.width} height={item.height}  />
                    </div>
                ))
            }
        </div>
    );
};

export default memo(Brands);