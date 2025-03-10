// import ContentBox from "../component/ui/ContentBox.tsx";
// import axios from "axios";
// import {useEffect, useState} from "react";
//
// const Content = () => {
//     const fetchAPI = async () => {
//         const response = await axios.get("http://localhost:3000/data")
//         setArray(response.data.fruits)
//         console.log(response.data.fruits);
//     }
//
//     const [array,setArray] = useState([]);
//
//     useEffect(() => {
//      fetchAPI()
//     },[])
//
//     return (
//         <ContentBox>
//             <div className="container flex justify-center items-center flex-col">
//
//                 {array.map((item,index)=>(
//                     <div key={index}>
//                         <p>{item}</p>
//                     </div>
//                 ))}
//
//                 <form className="flex flex-col">
//                     <label htmlFor="Big">Big Tension</label>
//
//                     <input type="number" placeholder="text text" min="0"
//                            className="transition duration-150 ease-in-out rounded-md outline-0 p-2 mb-8 border border-[#ced4da] focus:border-[#00b6fd] focus:shadow-custom"/>
//
//                     <label htmlFor="Big">Big Tension</label>
//
//                     <input type="number" placeholder="text text" min="0"
//                            className="transition duration-150 ease-in-out rounded-md outline-0 p-2 mb-8 border border-[#ced4da] focus:border-[#00b6fd] focus:shadow-custom"/>
//
//                     <button className="bg-green-400 cursor-pointer" type="submit">Save Tension</button>
//
//                 </form>
//             </div>
//         </ContentBox>
//     );
// };
//
// export default Content;

// import ContentBox from "../component/ui/ContentBox.tsx";
// import axios from "axios";
// import { useEffect, useState } from "react";
//
// interface TensionData {
//     bigTension:number,
//     smallTension:number,
// }
//
// const Content = () => {
//     const fetchAPI = async () => {
//         try {
//             const response = await axios.get("http://localhost:3000/data");
//             setArray(response.data); // Backend'den gelen verileri state'e ata
//         } catch (error) {
//             console.error("Veri çekme hatası:", error);
//         }
//     };
//
//     const [array, setArray] = useState<TensionData>([]);
//     const [bigTension, setBigTension] = useState("");
//     const [smallTension, setSmallTension] = useState("");
//
//     useEffect(() => {
//         fetchAPI();
//     }, []);
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             await axios.post("http://localhost:3000/save-tension", {
//                 bigTension: Number(bigTension),
//                 smallTension: Number(smallTension),
//             });
//             alert("Veri başarıyla kaydedildi!");
//         } catch (error) {
//             console.error("Veri gönderme hatası:", error);
//         }
//     };
//
//     return (
//         <ContentBox>
//             <div className="container flex justify-center items-center flex-col">
//                 <h2>Kayıtlı Tansiyon Verileri</h2>
//                 {array.length > 0 ? (
//                     array.map((item, index) => (
//                         <div key={index}>
//                             <p>Big Tension: {item.bigTension} | Small Tension: {item.smallTension}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>Henüz kayıtlı veri yok.</p>
//                 )}
//
//                 <form className="flex flex-col" onSubmit={handleSubmit}>
//                     <label htmlFor="Big">Big Tension</label>
//                     <input
//                         type="number"
//                         placeholder="text text"
//                         min="0"
//                         value={bigTension}
//                         onChange={(e) => setBigTension(e.target.value)}
//                         className="transition duration-150 ease-in-out rounded-md outline-0 p-2 mb-8 border border-[#ced4da] focus:border-[#00b6fd] focus:shadow-custom"
//                     />
//
//                     <label htmlFor="Small">Small Tension</label>
//                     <input
//                         type="number"
//                         placeholder="text text"
//                         min="0"
//                         value={smallTension}
//                         onChange={(e) => setSmallTension(e.target.value)}
//                         className="transition duration-150 ease-in-out rounded-md outline-0 p-2 mb-8 border border-[#ced4da] focus:border-[#00b6fd] focus:shadow-custom"
//                     />
//
//                     <button className="bg-green-400 cursor-pointer" type="submit">
//                         Save Tension
//                     </button>
//                 </form>
//             </div>
//         </ContentBox>
//     );
// };
//
// export default Content;

// import ContentBox from "../component/ui/ContentBox.tsx";
// import axios from "axios";
// import {  useState } from "react";
// import InputField from "../component/ui/InputField.tsx";
// import { Slide, toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";


// interface TensionData {
//     bigTension: number;
//     smallTension: number;
// }
// const Content = () => {
//     // const [array, setArray] = useState<TensionData[]>([]);
//     const [bigTension, setBigTension] = useState("");
//     const [smallTension, setSmallTension] = useState("");
//
//     if (!bigTension || bigTension < 1) {
//         toast.error("Please enter valid number", {
//             position: "top-right",
//             theme: "colored",
//             autoClose: 3000,
//             closeOnClick: true,
//             transition: Slide,
//         });
//         return;
//     }
//
//     if (!smallTension || smallTension < 1) {
//         toast.error("Please enter valid number", {
//             position: "top-right",
//             theme: "colored",
//             autoClose: 3000,
//             closeOnClick: true,
//             transition: Slide,
//         });
//         return;
//     }
//
//     // const fetchAPI = async () => {
//     //     try {
//     //         const response = await axios.get<TensionData[]>("http://localhost:3000/data");
//     //         setArray(response.data); // Backend'den gelen verileri state'e ata
//     //     } catch (error) {
//     //         console.error("Veri çekme hatası:", error);
//     //     }
//     // };
//
//     // useEffect(() => {
//     //     fetchAPI();
//     // }, []);
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             await axios.post("http://localhost:3000/save-tension", {
//                 bigTension: Number(bigTension),
//                 smallTension: Number(smallTension),
//             });
//             // <ToastContainer
//             //     position="top-right"
//             //     autoClose={3000}
//             //     hideProgressBar={false}
//             //     newestOnTop={false}
//             //     closeOnClick={false}
//             //     rtl={false}
//             //     pauseOnFocusLoss
//             //     draggable
//             //     pauseOnHover
//             //     theme="colored"
//             //     transition={Slide}
//             // />
//
//             toast.success("Tension Info Saved Succesfuly", {
//                 // position: "top-right",
//                 // theme: "colored",
//                 // autoClose: 3000,
//                 // closeOnClick: true,
//                 // transition: Slide,
//
//                 position: "top-right",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//                 transition: Slide,
//             });
//
//             // alert("Veri başarıyla kaydedildi!");
//         } catch (error) {
//             toast.error("Tension Info not saved", {
//                 // position: "top-right",
//                 // theme: "colored",
//                 // autoClose: 3000,
//                 // closeOnClick: true,
//                 // transition: Slide,
//
//                 position: "top-right",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//                 transition: Slide,
//             });
//
//             console.error("Veri gönderme hatası:", error);
//         }
//     };
//
//     return (
//         <ContentBox>
//             <div className="container flex justify-center items-center flex-col">
//                 {/*<h2>Kayıtlı Tansiyon Verileri</h2>*/}
//                 {/*{array.length > 0 ? (*/}
//                 {/*    array.map((item, index) => (*/}
//                 {/*        <div key={index}>*/}
//                 {/*            <p>Big Tension: {item.bigTension}</p>*/}
//                 {/*            <p>Small Tension: {item.smallTension}</p>*/}
//                 {/*        </div>*/}
//                 {/*    ))*/}
//                 {/*) : (*/}
//                 {/*    <p>Veri bulunamadı.</p>*/}
//                 {/*)}*/}
//
//                 <form onSubmit={handleSubmit} className="flex w-6/12 flex-col gap-2">
//                     {/*<input*/}
//                     {/*    type="number"*/}
//                     {/*    value={bigTension}*/}
//                     {/*    onChange={(e) => setBigTension(e.target.value)}*/}
//                     {/*    placeholder="Büyük tansiyon"*/}
//                     {/*    required*/}
//                     {/*/>*/}
//                     {/*<input*/}
//                     {/*    type="number"*/}
//                     {/*    value={smallTension}*/}
//                     {/*    onChange={(e) => setSmallTension(e.target.value)}*/}
//                     {/*    placeholder="Küçük tansiyon"*/}
//                     {/*    required*/}
//                     {/*/>*/}
//
//                     <InputField placeholder="Enter a big tension" type="number" value={bigTension} onChange={(e) => setBigTension(e.target.value)} required  />
//
//                     <InputField placeholder="Enter a small tension" type="number" value={smallTension} onChange={(e)=>setSmallTension(e.target.value)} required  />
//
//                     <button type="submit">Kaydet</button>
//                 </form>
//                 <ToastContainer/>
//             </div>
//
//         </ContentBox>
//     );
// };
//
// export default Content;
// import {useState} from "react";
// import axios from "axios";
// import {Slide, toast, ToastContainer} from "react-toastify";
// import InputField from "../component/ui/InputField.tsx";
// import ContentBox from "../component/ui/ContentBox.tsx";
// // import ShowTension from "./ShowTension.tsx";
//
// const Content = () => {
//     const [bigTension, setBigTension] = useState<string>("");
//     const [smallTension, setSmallTension] = useState<string>("");
//     // const [refresh,setRefresh] = useState<boolean>(false);
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//
//         // Validate the inputs before submission
//         const bigTensionNum = Number(bigTension);
//         const smallTensionNum = Number(smallTension);
//
//         if (!bigTension || bigTensionNum < 1) {
//             toast.error("Big tension must be a number greater than 0.", {
//                 position: "top-right",
//                 theme: "colored",
//                 autoClose: 3000,
//                 closeOnClick: true,
//                 transition: Slide,
//             });
//             return; // Prevent form submission if validation fails
//         }
//
//         if (!smallTension || smallTensionNum < 1) {
//             toast.error("Small tension must be a number greater than 0.", {
//                 position: "top-right",
//                 theme: "colored",
//                 autoClose: 3000,
//                 closeOnClick: true,
//                 transition: Slide,
//             });
//             return; // Prevent form submission if validation fails
//         }
//
//         try {
//             // Make the POST request to save the data
//             await axios.post("http://localhost:3000/save-tension", {
//                 bigTension: bigTensionNum,
//                 smallTension: smallTensionNum,
//             });
//
//             toast.success("Tension info saved successfully", {
//                 position: "top-right",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//                 transition: Slide,
//             });
//             setBigTension("");
//             setSmallTension("");
//             // setRefresh(prev=>!prev)
//         } catch (error) {
//             toast.error("Failed to save tension info", {
//                 position: "top-right",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//                 transition: Slide,
//             });
//             setBigTension("");
//             setSmallTension("");
//             console.error("Error saving tension info:", error);
//         }
//     };
//
//
//     return (
//         <ContentBox>
//             <div className="container flex justify-center items-center flex-col">
//                 <form onSubmit={handleSubmit} className="flex w-6/12 flex-col gap-2">
//                     <label htmlFor="bigTension">Big Tension</label>
//                     <InputField
//                         placeholder="Enter a big tension"
//                         type="number"
//                         min="1"
//                         value={bigTension}
//                         onChange={(e) => setBigTension(e.target.value.replace(/[^0-9]/g, ""))}
//                         onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Please enter a valid number")}
//                         onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
//                         required
//                     />
//
//                     <label htmlFor="smallTension">Small Tension</label>
//
//                     <InputField
//                         placeholder="Enter a small tension"
//                         type="number"
//                         min="1"
//                         value={smallTension}
//                         onChange={(e) => setSmallTension(e.target.value.replace(/[^0-9]/g, ""))}
//                         onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Please enter a valid number")}
//                         onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
//                         required
//                     />
//
//                     <button
//                         className="bg-[#28a745] text-white border-[#28a745] hover:bg-[#218838] border-[#1e7e34] rounded-md p-2 transition duration-150 hover:ease-in"
//                         type="submit">Save
//                     </button>
//                 </form>
//
//                 {/*<ShowTension refresh={refresh} />*/}
//
//                 <ToastContainer/>
//             </div>
//         </ContentBox>
//     );
// };
//
// export default Content;


// import { useState } from "react";
// import axios from "axios";
// import { Slide, toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router";
// import InputField from "../component/ui/InputField.tsx";
// import ContentBox from "../component/ui/ContentBox.tsx";
//
// const Content = () => {
//     const [bigTension, setBigTension] = useState<string>("");
//     const [smallTension, setSmallTension] = useState<string>("");
//     const [refresh, setRefresh] = useState<boolean>(false);
//     const navigate = useNavigate(); // Navigate hook to redirect
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//
//         // Validate the inputs before submission
//         const bigTensionNum = Number(bigTension);
//         const smallTensionNum = Number(smallTension);
//
//         if (!bigTension || bigTensionNum < 1) {
//             toast.error("Big tension must be a number greater than 0.", {
//                 position: "top-right",
//                 theme: "colored",
//                 autoClose: 3000,
//                 closeOnClick: true,
//                 transition: Slide,
//             });
//             return; // Prevent form submission if validation fails
//         }
//
//         if (!smallTension || smallTensionNum < 1) {
//             toast.error("Small tension must be a number greater than 0.", {
//                 position: "top-right",
//                 theme: "colored",
//                 autoClose: 3000,
//                 closeOnClick: true,
//                 transition: Slide,
//             });
//             return; // Prevent form submission if validation fails
//         }
//
//         try {
//             // Make the POST request to save the data
//             await axios.post("http://localhost:3000/save-tension", {
//                 bigTension: bigTensionNum,
//                 smallTension: smallTensionNum,
//             });
//
//             toast.success("Tension info saved successfully", {
//                 position: "top-right",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//                 transition: Slide,
//             });
//             setBigTension("");
//             setSmallTension("");
//             setRefresh(prev => !prev);
//
//             // Redirect to ShowTension page after saving
//             navigate("/showing-tension");
//
//         } catch (error) {
//             toast.error("Failed to save tension info", {
//                 position: "top-right",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//                 transition: Slide,
//             });
//             setBigTension("");
//             setSmallTension("");
//             console.error("Error saving tension info:", error);
//         }
//     };
//
//     return (
//         <ContentBox>
//             <div className="container flex justify-center items-center flex-col">
//                 <form onSubmit={handleSubmit} className="flex w-6/12 flex-col gap-2">
//                     <label htmlFor="bigTension">Big Tension</label>
//                     <InputField
//                         placeholder="Enter a big tension"
//                         type="number"
//                         min="1"
//                         value={bigTension}
//                         onChange={(e) => setBigTension(e.target.value.replace(/[^0-9]/g, ""))}
//                         onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Please enter a valid number")}
//                         onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
//                         required
//                     />
//
//                     <label htmlFor="smallTension">Small Tension</label>
//                     <InputField
//                         placeholder="Enter a small tension"
//                         type="number"
//                         min="1"
//                         value={smallTension}
//                         onChange={(e) => setSmallTension(e.target.value.replace(/[^0-9]/g, ""))}
//                         onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Please enter a valid number")}
//                         onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
//                         required
//                     />
//
//                     <button
//                         className="bg-[#28a745] text-white border-[#28a745] hover:bg-[#218838] border-[#1e7e34] rounded-md p-2 transition duration-150 hover:ease-in"
//                         type="submit"
//                     >
//                         Save
//                     </button>
//                 </form>
//
//                 <ToastContainer />
//             </div>
//         </ContentBox>
//     );
// };
//
// export default Content;


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
            await axios.post("http://localhost:3000/save-tension", {
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