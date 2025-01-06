import React from 'react'
import { ImCross } from 'react-icons/im'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

function CampTableData({ data, idx, myCamp, setMyCamp, campaign }) {

    const handelDeleteCampaign = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_URL}/myCampaign/${id}`, {
                    method: 'DELETE',
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const newMyCamp = myCamp.filter((camp) => camp._id !== id);
                            setMyCamp(newMyCamp);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Successfully Campaign Deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        })
    }

    return (
        <tr>
            <th>{idx + 1}</th>
            <th>{data?.title}</th>
            <td className="hidden sm:block">${data?.amount}</td>
            <td>{data?.date}</td>
            {
                campaign ?
                    <>
                        <td><Link to={`/updateCampaign/${data?._id}`} className="badge badge-accent min-w-max">Update</Link></td>
                        <td onClick={() => handelDeleteCampaign(data?._id)}><ImCross className="bg-red-600 box-content p-2 rounded-xl" /></td>
                    </>
                    : <>
                    <td>{data?.type}</td>
                    </>
            }
        </tr>
    )
}

export default CampTableData
