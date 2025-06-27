import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type InputBoxProps = {
    type: string;
    name: string;
    id: string;
    placeholder: string;
}

const InputBox = ({type, name, id, placeholder}: InputBoxProps) => {
    return (
        <input className="w-full border border-gray-300 h-20 px-10 rounded" id={id} name={name} type={type} placeholder={placeholder} />
    )
}

export const ContactForm = () => {
    return (
        <div>
            <form >
                <div className="grid grid-cols-2 gap-4">
                    <InputBox 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                    />
                    <InputBox 
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                    />
                    <div className="col-span-2">
                        <InputBox 
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone number"
                        />
                    </div>
                    <div className="col-span-2">
                        <Textarea 
                            id="comment"
                            placeholder="Comment"
                            className="h-40 border-gray-300 rounded p-10"
                        />
                    </div>
                </div>
                <Button className="bg-[#FF9933] px-10 mt-4 rounded-3xl hover:bg-[none] cursor-pointer">
                    Submit
                </Button>
            </form>
        </div>
    )
}