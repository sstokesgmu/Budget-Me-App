import classes from './CarouselCard.module.css'
export default function CarouselCard()
{
    return (
            <div className={classes.container}>
                <div className={classes.title}>
                    <span>W</span>
                    <p>Company</p>
                </div>
                <div className={classes.body}>
                    <p>$100.00</p>
                    <p>(15%)</p>     
                </div>
            </div>
    );
}