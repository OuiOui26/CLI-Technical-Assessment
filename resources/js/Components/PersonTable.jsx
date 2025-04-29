import React from "react";

export default function PersonTable({people}){

    return(
        <>
            <div className="flex justify-center py-24">
                <table className="mt-2 border text-center w-full max-w-md">
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
            </div>
        </>
    );

}