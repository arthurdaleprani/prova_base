import Link from "@/node_modules/next/link";
import receitas from '@/recipes.json';

export default function ReceitasDetalhes({ params }: { params: { id: number } }) {

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Receita</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {receitas.map(receita => (
                    <div key={receita.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img className="w-full h-48 object-cover" src={receita.image} alt={receita.name} />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{receita.name}</h2> 
                            <li>{receita.ingredients}</li>
                            <li>{receita.instructions}</li>                      
                            <div className="mt-4">
                                <Link href='/recipes'>
                                    Voltar
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  }
  


 