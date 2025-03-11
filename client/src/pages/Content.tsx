import {useState} from "react";
import axios from "axios";
import {Slide, toast, ToastContainer} from "react-toastify";
import InputField from "../component/ui/InputField.tsx";
import ContentBox from "../component/ui/ContentBox.tsx";

const Content = () => {
    const [bigTension, setBigTension] = useState<string>("");
    const [smallTension, setSmallTension] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate the inputs before submission
        const bigTensionNum = Number(bigTension);
        const smallTensionNum = Number(smallTension);

        if (!bigTension || bigTensionNum < 1) {
            toast.error("Big tension must be a number greater than 0.", {
                position: "top-right",
                theme: "colored",
                autoClose: 3000,
                closeOnClick: true,
                transition: Slide,
            });
            return; // Prevent form submission if validation fails
        }

        if (!smallTension || smallTensionNum < 1) {
            toast.error("Small tension must be a number greater than 0.", {
                position: "top-right",
                theme: "colored",
                autoClose: 3000,
                closeOnClick: true,
                transition: Slide,
            });
            return; // Prevent form submission if validation fails
        }

        try {
            // Make the POST request to save the data
            await axios.post("/api/save-tension", {
                bigTension: bigTensionNum,
                smallTension: smallTensionNum,
            });

            toast.success("Tension info saved successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
            setBigTension("");
            setSmallTension("");
        } catch (error) {
            toast.error("Failed to save tension info", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
            setBigTension("");
            setSmallTension("");
            console.error("Error saving tension info:", error);
        }
    };


    return (
        <ContentBox>
            <div className="container flex justify-center items-center flex-col">
                <form onSubmit={handleSubmit} className="flex w-6/12 flex-col gap-2">
                    <label htmlFor="bigTension">Big Tension</label>
                    <InputField
                        placeholder="Enter a big tension"
                        type="number"
                        min="1"
                        value={bigTension}
                        onChange={(e) => setBigTension(e.target.value.replace(/[^0-9]/g, ""))}
                        onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Please enter a valid number")}
                        onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                        required
                    />

                    <label htmlFor="smallTension">Small Tension</label>

                    <InputField
                        placeholder="Enter a small tension"
                        type="number"
                        min="1"
                        value={smallTension}
                        onChange={(e) => setSmallTension(e.target.value.replace(/[^0-9]/g, ""))}
                        onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Please enter a valid number")}
                        onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                        required
                    />

                    <button
                        className="bg-[#28a745] text-white border-[#28a745] hover:bg-[#218838] border-[#1e7e34] rounded-md p-2 transition duration-150 hover:ease-in"
                        type="submit">Save
                    </button>
                </form>

                <ToastContainer/>
            </div>
        </ContentBox>
    );
};

export default Content;