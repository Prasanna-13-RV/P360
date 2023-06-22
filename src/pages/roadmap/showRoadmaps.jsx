import { useState, useEffect } from "react";
import { getRoadmaps } from "../../axios/roadmap.axios";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import FooterAdmin from "../../components/admin/FooterAdmin";

const ShowRoadmaps = () => {
    const navigate = useNavigate();
    const [roadmap, setRoadmap] = useState();
    useEffect(() => {
        getRoadmaps().then((res) => {
            setRoadmap(res.data);
        });
    }, []);
    return (
        <>
            <NavbarAdmin />
            <div className="min-h-screen w-full flex items-start justify-start p-6">
                {roadmap &&
                    roadmap.map((res) => {
                        return (
                            <>
                                <div
                                    onClick={() =>
                                        navigate("/admin/updateroadmap", {
                                            state: res,
                                        })
                                    }
                                    className="bg-[#f6f6f6] mr-6 shadow-md rounded-md flex justify-center items-center h-[150px] w-[300px]"
                                >
                                    <h1 className="font-bold text-xl">
                                        {res.name}
                                    </h1>
                                </div>
                            </>
                        );
                    })}
            </div>
            <FooterAdmin />
        </>
    );
};

export default ShowRoadmaps;
