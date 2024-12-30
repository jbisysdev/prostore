import { cn } from "@/lib/utils";

const ProductPrice = ({value, className}: {value: string, className?:string}) => {
    // Ensure two decimal places
    const stringValue = Number(value).toFixed(2);
    // Get the int / float values
    const [intValue, floatValue] = stringValue.split('.');
    return (
        <p className={cn('text-2xl', className)}>
            <span className="text-xs align-super">$</span>
            <span>{intValue}</span>
            <span className="text-xs align-super">.{floatValue}</span>
        </p>
    );
}
 
export default ProductPrice;