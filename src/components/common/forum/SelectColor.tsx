import {useState} from "react";
import {BlockPicker} from "react-color";
import {UseFormSetValue} from "react-hook-form";

type Props = {
    setValue: UseFormSetValue<any>;
    field: any;
    title: string;
    field_name: string;
};

const SelectColor = ({field, field_name, setValue, title}: Props) => {
    const [color, setColor] = useState(field);
    const handleChange = (color: any) => {
        setColor(color.hex);
        setValue(field_name, color.hex);
    };
    return (
        <div className="p-2  ">
            <label className="my-4 block text-sm font-medium text-gray-700">
                {title}
            </label>
            <BlockPicker
                color={color}
                onChange={handleChange}
                styles={{
                    default: {
                        card: {
                            backgroundColor: "#1a202c",
                        },
                    },
                }
                }

            />
        </div>
    );
};

export default SelectColor;
