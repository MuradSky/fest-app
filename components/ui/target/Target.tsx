import { memo } form 'react';
import styles from './Target.module.scss';


type TData = {
    href: string,
    icon: string;
}

type TargetProps = {
    data: TData[]
}

const Target = ({ data }: TargetProps) => {

    return (
        <div className={''}>
            {data.map((item: TData) => (
                <a key={item.href} href={item.href} target="_blank" rel="noreferrer noopener">
                    {item.icon}
                </a>
            )}
        </div>
    );
};

export defult memo(Target)