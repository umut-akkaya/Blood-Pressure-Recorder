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
            const response = await fetch(`https://blood-pressure-recorder.vercel.app/data/${editId}`, {
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
            const response = await axios.delete(`https://blood-pressure-recorder.vercel.app/data/${id}`);

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
            const response = await axios.get("https://blood-pressure-recorder.vercel.app/api/data");
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
