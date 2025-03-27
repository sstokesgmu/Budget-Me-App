import classes from './CarouselLabel.module.css';
export default function CarouselLabel({ data, options }) {
    const { selectedBucket, func } = options;
    // Check if the current label is the selected one
    const isSelected = selectedBucket === data;
    const handleClick = () => {
        func(data); // Set the selected bucket in the parent
    };
    const labelClass = `${classes.carouselLabel} ${isSelected ? classes.selected : ''}`;
    return (<h3 className={labelClass} onClick={handleClick}>
      Bucket: {data}
    </h3>);
}
