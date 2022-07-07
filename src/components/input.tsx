import React, { FC, Dispatch, SetStateAction, ChangeEvent } from "react";

type Props = {
    name: string
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

const Input: FC<Props> = ({ name, value, setValue }) => {
    // Handling user click via submit button
    const handleSubmit = (e: ChangeEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    // Handling user input via input column
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    return (
        <div className="flex md:flex-1">
            <input
                type="text"
                className={`font-roboto-mono outline-none w-96 rounded-lg`}
                placeholder="What you want todo..."
                name={name}
                value={value}
                onChange={handleInput}
            />
            <button className="bg-[#0EA5E9] rounded-lg mx-4 px-4 font-nunito text-white" onSubmit={handleSubmit}>
                Submit
            </button>
        </div>
    )
}

export default Input;