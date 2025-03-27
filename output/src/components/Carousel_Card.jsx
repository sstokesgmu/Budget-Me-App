import classes from './CarouselCard.module.css';
import { calculateAmountDirection } from '../utilities/Math';
export default function CarouselCard({ data }) {
    const direction = calculateAmountDirection(data.amount, data.trans_type) > 0;
    return (<div className={classes.container}>
            <div className={classes.title}>
                <span>{direction ? 'D' : 'W'}</span>
                <p>{data.comp_name}</p>
            </div>
            <div className={classes.body}>
                <p className={direction ? classes.deposit : classes.withdrawl}>{direction ? '' : '-'}${data.amount}</p>
                <p>(15%)</p>
            </div>
        </div>);
}
