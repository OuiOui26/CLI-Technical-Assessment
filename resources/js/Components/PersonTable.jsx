import React from "react";

export default function PersonTable({people}){

    return(
        <>
        <h2 className="text-lg font-semibold mt-8">Saved People</h2>
            <table className="mt-2 border text-center w-full">
                <thead>
                    <tr>
                        <th className="border px-2">First Name</th>
                        <th className="border px-2">Last Name</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {people.map((person) => (
                        <tr key={person.id}>
                            <td className="border px-2">{person.first_name}</td>
                            <td className="border px-2">{person.last_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );

}