import { useNavigate } from 'react-router-dom';

function CampaignCard({ data, callFrom }) {

    const navigation = useNavigate();

    const { _id, title, photo, type, date, description, amount } = data || {};

    const handelSeeDetails = () => {
        navigation(`/campaign/${_id}`)
    }
    return (
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
            <figure>
                <img src={photo} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="badge badge-success text-white p-3">${amount}</div>
                <p>{description}</p>
                <p>{type}</p>
                <p>{date}</p>
                <div className="card-actions justify-center mt-4">
                    {
                        callFrom ? '' :
                            <button onClick={handelSeeDetails} className="btn btn-sm btn-accent text-lg px-8 disabled:btn-info disabled:opacity-60 disabled:cursor-none">See mote</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default CampaignCard
