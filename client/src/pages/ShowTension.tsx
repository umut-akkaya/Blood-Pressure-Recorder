// import axios from "axios";
// import { useEffect, useState } from "react";
// import ContentBox from "../component/ui/ContentBox.tsx";
//
//
// export default function ShowTension({refresh}) {
//

//
// Başlangıç değeri boş dizi olarak ayarlandı
//
//     const showingData = async () => {
//         try {
//             const response = await axios.get("http://localhost:3000/data");
//             setArray(response.data);
//         } catch (error) {
//             console.error("Veri Çekme Hatası:", error);
//         }
//     };
//
//     useEffect(() => {
//         const fetchData = async () => {
//             await showingData();
//         };
//         fetchData();
//     }, []);
//
//     return (
//         <ContentBox>
//             <div className="container flex justify-center items-center flex-col">
//                 <h2>Kayıtlı Tansiyon Verileri</h2>
//                 {array.length > 0 ? (
//                     array.map((item, index) => (
//                         <div key={index} className="border p-2 my-1 rounded-md">
//                             <p><strong>Big Tension:</strong> {item.bigTension} | <strong>Small
//                                 Tension:</strong> {item.smallTension}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>Henüz kayıtlı veri yok.</p>
//                 )}
//             </div>
//         </ContentBox>
//     );
// }

// import axios from "axios";
// import { useEffect, useState } from "react";
// import ContentBox from "../component/ui/ContentBox.tsx";
//
// interface TensionData {
//     bigTension: number;
//     smallTension: number;
// }
//
// interface ShowTensionProps {
//     refresh?: boolean; // Optional prop to trigger refresh
// }
//
// export default function ShowTension({ refresh }: ShowTensionProps) {
//     const [array, setArray] = useState<TensionData[]>([]);
//
//     const fetchData = async () => {
//         try {
//             const response = await axios.get("http://localhost:3000/data");
//             setArray(response.data);
//         } catch (error) {
//             console.error("Veri Çekme Hatası:", error);
//         }
//     };
//
//     useEffect(() => {
//         fetchData();
//     }, []);
//
//     return (
//         <ContentBox>
//             <div className="container flex justify-center items-center flex-col">
//                 <h2>Kayıtlı Tansiyon Verileri</h2>
//                 {array.length > 0 ? (
//                     array.map((item, index) => (
//                         <div key={index} className="border p-2 my-1 rounded-md">
//                             <p><strong>Big Tension:</strong> {item.bigTension} | <strong>Small
//                                 Tension:</strong> {item.smallTension}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>Henüz kayıtlı veri yok.</p>
//                 )}
//             </div>
//         </ContentBox>
//     );
// }

// import axios from "axios";
// import { useEffect, useState } from "react";
// import ContentBox from "../component/ui/ContentBox.tsx";
//
// interface TensionData {
//     _id: string;
//     bigTension: number;
//     smallTension: number;
// }
//
// export default function ShowTension() {
//     const [array, setArray] = useState<TensionData[]>([]);
//     const [loading, setLoading] = useState<boolean>(false);
//
//     const handleDelete = async (id: string) => {
//         try {
//             setLoading(true)
//             console.log("Attempting to delete item with ID:", id);
//
//             const response = await axios.delete(`http://localhost:3000/data/${id}`);
//             console.log("Delete response:", response.data);
//
//             // Update UI after successful deletion
//             setArray((prevArray) => prevArray.filter((item) => item._id !== id));
//         } catch (error) {
//             console.error("Delete request failed:", error);
//             // Show more details if available
//             if (error.response) {
//                 console.error("Error details:", error.response.data);
//                 // You could show this to the user with an alert or toast
//                 alert(`Silme hatası: ${error.response.data.error || 'Bilinmeyen hata'}`);
//             }
//         }
//     };
//
//     const fetchData = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get("http://localhost:3000/data");
//             setArray(response.data);
//         } catch (error) {
//             console.error("Veri Çekme Hatası:", error);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     // Set up polling to fetch data at regular intervals
//     // useEffect(() => {
//     //     // Initial fetch
//     //     fetchData();
//     //
//     //     // Set up interval for polling (every 5 seconds)
//     //     const intervalId = setInterval(() => {
//     //         fetchData();
//     //     }, 5000);
//     //
//     //     // Clean up the interval when component unmounts
//     //     return () => clearInterval(intervalId);
//     // }, []);
//
//     useEffect(() => {
//         // Initial fetch
//         fetchData();
//
//         // Log the data structure once it's loaded
//         if (array.length > 0) {
//             console.log("First item structure:", array[0]);
//         }
//
//         // Set up interval for polling (every 5 seconds)
//         const intervalId = setInterval(() => {
//             fetchData();
//         }, 5000);
//
//         // Clean up the interval when component unmounts
//         return () => clearInterval(intervalId);
//     }, [array.length]);
//
//     return (
//         <ContentBox>
//             <div className="container flex justify-center items-center flex-col">
//                 <h2 className="text-xl font-bold mb-4">Kayıtlı Tansiyon Verileri</h2>
//                 {loading ? (
//                     <p className="text-gray-500">Veriler yükleniyor...</p>
//                 ) : array.length > 0 ? (
//                     array.map((item, index) => (
//                         <div key={index} className="border p-2 my-1 rounded-md w-full max-w-md">
//                             <p><strong>Big Tension:</strong> {item.bigTension} | <strong>Small Tension:</strong> {item.smallTension}</p>
//                             <button className="bg-red-100"    onClick={() => {
//                                 if (window.confirm("Bu kaydı silmek istediğinizden emin misiniz?")) {
//                                     handleDelete(item._id);
//                                 }
//                             }}
//                             >Delete</button>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-gray-500">Henüz kayıtlı veri yok.</p>
//                 )}
//             </div>
//         </ContentBox>
//     );
// }

// import axios from "axios";
// import { useEffect, useState } from "react";
// import ContentBox from "../component/ui/ContentBox.tsx";
//
// interface TensionData {
//     _id: string;
//     bigTension: number;
//     smallTension: number;
// }
//
// export default function ShowTension() {
//     const [array, setArray] = useState<TensionData[]>([]);
//     const [loading, setLoading] = useState<boolean>(false);
//
//     const handleDelete = async (id: string) => {
//         try {
//             setLoading(true);
//             const response = await axios.delete(`http://localhost:3000/data/${id}`);
//
//             if (response.status === 200) {
//                 // Silme işlemi başarılı olduğunda, verileri yeniden çek
//                 fetchData();
//             }
//         } catch (error: any) { // TypeScript için 'any' tipini kullanıyoruz
//             console.error("Delete request failed:", error);
//             if (error.response) {
//                 console.error("Error details:", error.response.data);
//                 alert(`Silme hatası: ${error.response.data.error || 'Bilinmeyen hata'}`);
//             }
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     const fetchData = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get("http://localhost:3000/data");
//             setArray(response.data);
//         } catch (error) {
//             console.error("Veri Çekme Hatası:", error);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     useEffect(() => {
//         // Sadece bileşen ilk yüklendiğinde verileri getir
//         fetchData();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);
//
//     return (
//         <ContentBox>
//             <div className="container flex justify-center items-center flex-col">
//                 <h2 className="text-xl font-bold mb-4">Kayıtlı Tansiyon Verileri</h2>
//                 {loading ? (
//                     <p className="text-gray-500">Veriler yükleniyor...</p>
//                 ) : array.length > 0 ? (
//                     array.map((item, index) => (
//                         <div key={index} className="border p-2 my-1 rounded-md w-full max-w-md">
//                             <p><strong>Big Tension:</strong> {item.bigTension} | <strong>Small Tension:</strong> {item.smallTension}</p>
//                             <button
//                                 className="bg-red-500 text-white px-2 py-1 rounded mt-2 hover:bg-red-600 transition disabled:bg-red-300"
//                                 onClick={() => handleDelete(item._id)}
//                                 disabled={loading}
//                             >
//                                 {loading ? "İşleniyor..." : "Delete"}
//                             </button>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-gray-500">Henüz kayıtlı veri yok.</p>
//                 )}
//             </div>
//         </ContentBox>
//     );
// }

// import axios from "axios";
// import {useEffect, useState} from "react";
// import ContentBox from "../component/ui/ContentBox.tsx";
//
// interface TensionData {
//     _id: string;
//     bigTension: number;
//     smallTension: number;
// }
//
// export default function ShowTension() {
//     const [array, setArray] = useState<TensionData[]>([]);
//     const [loading, setLoading] = useState<boolean>(false);
//
//     const updateTension = async (id, newValues) => {
//         try {
//             const response = await fetch(`http://localhost:5000/data/${id}`, {
//                 method: "PUT",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(newValues),
//             });
//
//             const data = await response.json();
//             if (!response.ok) {
//                 throw new Error(data.error || "Güncelleme başarısız");
//             }
//
//             console.log("Güncellendi:", data);
//         } catch (error) {
//             console.error("Güncelleme hatası:", error);
//         }
//     };
//
//
//     const handleDelete = async (id: string) => {
//         // Silme işlemi öncesinde kullanıcıya onay sor
//         const isConfirmed = window.confirm("Bu tansiyon kaydını silmek istediğinizden emin misiniz?");
//
//         // Kullanıcı onay vermediyse işlemi iptal et
//         if (!isConfirmed) {
//             return;
//         }
//
//         try {
//             setLoading(true);
//             const response = await axios.delete(`http://localhost:3000/data/${id}`);
//
//             if (response.status === 200) {
//                 // Silme işlemi başarılı olduğunda, verileri yeniden çek
//                 fetchData();
//             }
//         } catch (error: any) {
//             console.error("Delete request failed:", error);
//             if (error.response) {
//                 console.error("Error details:", error.response.data);
//                 alert(`Silme hatası: ${error.response.data.error || 'Bilinmeyen hata'}`);
//             }
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     const fetchData = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get("http://localhost:3000/data");
//             setArray(response.data);
//         } catch (error) {
//             console.error("Veri Çekme Hatası:", error);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     useEffect(() => {
//         // Sadece bileşen ilk yüklendiğinde verileri getir
//         fetchData();
//     }, []);
//
//     return (
//         <ContentBox>
//             <div className="container flex justify-center items-center flex-col">
//                 <h2 className="text-xl font-bold mb-4">Kayıtlı Tansiyon Verileri</h2>
//                 {loading ? (
//                     <p className="text-gray-500">Veriler yükleniyor...</p>
//                 ) : array.length > 0 ? (
//                     array.map((item, index) => (
//                         <div key={index} className="border p-2 my-1 rounded-md w-full max-w-md">
//                             <p><strong>Big Tension:</strong> {item.bigTension} | <strong>Small
//                                 Tension:</strong> {item.smallTension}</p>
//                             <button
//                                 className="bg-red-500 cursor-pointer text-white px-2 py-1 rounded mt-2 hover:bg-red-600 transition disabled:bg-red-300"
//                                 onClick={() => handleDelete(item._id)}
//                                 disabled={loading}
//                             >
//                                 {loading ? "İşleniyor..." : "Delete"}
//                             </button>
//                             <button onClick={() => updateTension(id, newValues)}
//                                     className="bg-yellow-500 cursor-pointer text-white px-2 py-1 rounded mt-2 hover:bg-yellow-600 transition mx-2 disabled:bg-red-300">Update
//                             </button>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-gray-500">Henüz kayıtlı veri yok.</p>
//                 )}
//             </div>
//         </ContentBox>
//     );
// }

import axios from "axios";
import { useEffect, useState } from "react";
import ContentBox from "../component/ui/ContentBox.tsx";

interface TensionData {
    _id: string;
    bigTension: number;
    smallTension: number;
}

export default function ShowTension() {
    const [array, setArray] = useState<TensionData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [editId, setEditId] = useState<string | null>(null);
    const [formData, setFormData] = useState<{ bigTension: number; smallTension: number }>({
        bigTension: 0,
        smallTension: 0,
    });

    const updateTension = async () => {
        if (!editId) return;
        try {
            const response = await fetch(`http://localhost:3000/data/${editId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Güncelleme başarısız");
            }

            console.log("Güncellendi");
            setEditId(null);
            fetchData(); // Sayfayı güncelle
        } catch (error) {
            console.error("Güncelleme hatası:", error);
        }
    };

    const handleEditClick = (item: TensionData) => {
        setEditId(item._id);
        setFormData({ bigTension: item.bigTension, smallTension: item.smallTension });
    };

    const handleDelete = async (id: string) => {
        const isConfirmed = window.confirm("Bu tansiyon kaydını silmek istediğinizden emin misiniz?");
        if (!isConfirmed) return;

        try {
            setLoading(true);
            const response = await axios.delete(`http://localhost:3000/data/${id}`);

            if (response.status === 200) {
                fetchData();
            }
        } catch (error: any) {
            console.error("Delete request failed:", error);
            alert(`Silme hatası: ${error.response?.data?.error || "Bilinmeyen hata"}`);
        } finally {
            setLoading(false);
        }
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/data");
            setArray(response.data);
        } catch (error) {
            console.error("Veri Çekme Hatası:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ContentBox>
            <div className="container flex justify-center items-center flex-col">
                <h2 className="text-xl font-bold mb-4">Kayıtlı Tansiyon Verileri</h2>
                {loading ? (
                    <p className="text-gray-500">Veriler yükleniyor...</p>
                ) : array.length > 0 ? (
                    array.map((item) => (
                        <div key={item._id} className="border p-2 my-1 rounded-md w-full max-w-md">
                            {editId === item._id ? (
                                <>
                                    <input
                                        type="number"
                                        value={formData.bigTension}
                                        onChange={(e) => setFormData({ ...formData, bigTension: Number(e.target.value) })}
                                        className="border p-1 mr-2"
                                    />
                                    <input
                                        type="number"
                                        value={formData.smallTension}
                                        onChange={(e) => setFormData({ ...formData, smallTension: Number(e.target.value) })}
                                        className="border p-1"
                                    />
                                    <button
                                        onClick={updateTension}
                                        className="bg-green-500 text-white px-2 py-1 rounded mt-2 ml-2"
                                    >
                                        Kaydet
                                    </button>
                                    <button
                                        onClick={() => setEditId(null)}
                                        className="bg-gray-500 text-white px-2 py-1 rounded mt-2 ml-2"
                                    >
                                        İptal
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p>
                                        <strong>Big Tension:</strong> {item.bigTension} | <strong>Small
                                        Tension:</strong> {item.smallTension}
                                    </p>
                                    <button
                                        className="bg-red-500 cursor-pointer text-white px-2 py-1 rounded mt-2 hover:bg-red-600 transition disabled:bg-red-300"
                                        onClick={() => handleDelete(item._id)}
                                        disabled={loading}
                                    >
                                        {loading ? "İşleniyor..." : "Delete"}
                                    </button>
                                    <button
                                        onClick={() => handleEditClick(item)}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded mt-2 hover:bg-yellow-600"
                                    >
                                        Güncelle
                                    </button>
                                </>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Henüz kayıtlı veri yok.</p>
                )}

                {/*{loading ? (*/}
                {/*    <p className="text-gray-500">Veriler yükleniyor...</p>*/}
                {/*) : array.length > 0 ? (*/}
                {/*    array.map((item) => (*/}
                {/*        <div key={item._id} className="border p-2 my-1 rounded-md w-full max-w-md">*/}
                {/*            <p>*/}
                {/*                <strong>Big Tension:</strong> {item.bigTension} | <strong>Small Tension:</strong> {item.smallTension}*/}
                {/*            </p>*/}
                {/*            <button*/}
                {/*                onClick={() => updateTension(item._id, { bigTension: 120, smallTension: 80 })}*/}
                {/*                className="bg-yellow-500 cursor-pointer text-white px-2 py-1 rounded mt-2 hover:bg-yellow-600 transition mx-2 disabled:bg-red-300"*/}
                {/*            >*/}
                {/*                Update*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    ))*/}
                {/*) : (*/}
                {/*    <p className="text-gray-500">Henüz kayıtlı veri yok.</p>*/}
                {/*)}*/}
            </div>
        </ContentBox>
    );
}
