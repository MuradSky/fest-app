import { ElementType, HTMLAttributes, memo } from 'react';
import classNames from 'classnames';
import styles from './Text.module.scss';

interface TextProps extends HTMLAttributes<HTMLParagraphElement | HTMLElement> {
    as?: ElementType;
    center?: boolean;
    size?: 14;
}

const Text = (props: TextProps) => {
    const { as: Cmp = 'p', size, children, className, center, ...rest } = props;
    const cssClasses = classNames(
        styles.text,
        className,
        center && styles.center,
        size === 14 && styles.s14
    );

    return (
        <Cmp className={cssClasses} {...rest}>
            {children}
        </Cmp>
    );
};

export default memo(Text);
