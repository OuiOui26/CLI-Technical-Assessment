import PersonForm from '@/Components/PersonForm';
import PersonTable from '@/Components/PersonTable';

export default function Index({ people }) {


    return (
        <div className="p-4 mx-auto mt-10 w-[50%] border-2">
            <PersonForm />
            <PersonTable people={people} />
        </div>
    );
}
