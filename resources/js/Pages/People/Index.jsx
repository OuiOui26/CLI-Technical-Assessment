import { useForm } from '@inertiajs/react';

export default function Index({ people }) {
    const { data, setData, post, processing, reset } = useForm({
        first_name: '',
        last_name: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('people.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="p-4 mx-auto mt-10 w-[50%] border-2">
            <h1 className="text-xl font-bold mb-4">Add Person</h1>
            <form onSubmit={submit} className="space-y-2">
                <input
                    type="text"
                    placeholder="First Name"
                    value={data.first_name}
                    onChange={(e) => setData('first_name', e.target.value)}
                    className="border p-2 block w-full"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={data.last_name}
                    onChange={(e) => setData('last_name', e.target.value)}
                    className="border p-2 block w-full"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    disabled={processing}
                >
                    Add
                </button>
            </form>

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
        </div>
    );
}
