import PersonForm from '@/Components/PersonForm';
import PersonTable from '@/Components/PersonTable';

export default function Index({ people }) {


    return (
        <div className="mx-auto mt-10 w-[75%] border-2">
            <PersonForm />
            <PersonTable people={people} />
        </div>
    );
}
