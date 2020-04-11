function Node(data, parent) {
    this.data = data;
    this.parent = parent;
    this.children = [];
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(data, toNodeData) {
        // If the toNodeData arg is passed, find it. Otherwise, store null.
        const parent = toNodeData ? this.findBFS(toNodeData) : null;
        const node = new Node(data, parent ? parent.data : null);

        // Push new node to parent whose value matches toNodeData
        if(parent) {
            parent.children.push(node)
        } else {
            // If there's no parent, make this the root node
            if(!this.root)
                this.root = node;
            else
                return "Tried to store node as root when root already exists."
        }
    }

    findBFS(data) {
        //const queue = [this.root];
        let _node = null;

        // Go thru every node in BFS
        this.traverseBFS((node) => {
            // Return match if found
            if(node.data === data) {
                _node = node;
            }
        })

        return _node;
    }

    traverseBFS(cb) {
        const queue = [this.root];

        if (cb)
            while (queue.length) {
                // Store current node & remove it from queue
                const node = queue.shift();

                cb(node)

                // Push children of current node to end of queue
                for (const child of node.children) {
                    queue.push(child);
                }
            }
    }
}

const getTreeData = () => {
  
    let tree = new Tree();

    // Root
    tree.add('Options')

    // Sub group 1 Main
    tree.add('Lazer xidmətləri', 'Options')
    tree.add('Digər xidmətlər', 'Options')


    // Sub group 2 Lazer xidmətləri
    tree.add('Cilalanma', 'Lazer xidmətləri')
    tree.add('Damar mənşəli', 'Lazer xidmətləri')
    tree.add('Dəri törəmələri', 'Lazer xidmətləri')
    tree.add('Cavanlaşma', 'Lazer xidmətləri')
    tree.add('Dəri xəstəlikləri', 'Lazer xidmətləri')
    tree.add('Trixologiya', 'Lazer xidmətləri')
    tree.add('Qswittched laser', 'Lazer xidmətləri')

    // Sub group 3 Cilalanma 
    tree.add('Çapıq', 'Cilalanma')
    tree.add('Stria (cırıq)', 'Cilalanma')
    tree.add('Üzdəki məsamələrin və postakne çapıqların lazerlə müalicəsi', 'Cilalanma')
    tree.add('Qulaq seyvanında sırğa yerinin lazerlə bərpası', 'Cilalanma')
    
    // Sub group 3 Damar mənşəli
    tree.add('Burun ətrafı kapilyarların lazerlə götürülməsi', 'Damar mənşəli')
    tree.add('Üzdə olan kapilyarların lazerlə götürülməsi', 'Damar mənşəli')
    tree.add('Ayaqda olan damarların lazerlə müalicəsi', 'Damar mənşəli')
    tree.add('Anadangəlmə qırmızı xalların (alovlanan nevus) lazerlə müalicəsi', 'Damar mənşəli')
    tree.add('Hemanguomaların (damar xallarının) lazerlə müalicəsi', 'Damar mənşəli')
    tree.add('Rozasea, dəridəki qızartıların lazerlə müalicəsi - 1 seans', 'Damar mənşəli')

    // Sub group 3 Dəri törəmələri
    tree.add('Xal, zıyıl, papilloma', 'Dəri törəmələri')

    // Sub group 3 Cavanlaşma
    tree.add('Göz ətrafı nahiyyənin lazerlə gəncləşməsi', 'Cavanlaşma')
    tree.add('Lazerlə dodaq gəncləşmə', 'Cavanlaşma')
    tree.add('Ekspres liftinq', 'Cavanlaşma')
    tree.add('Fransional cavanlaşma', 'Cavanlaşma')
    tree.add('2D cavanlaşma', 'Cavanlaşma')
    tree.add('3D cavanlaşma', 'Cavanlaşma')
    tree.add('4D cavanlaşma', 'Cavanlaşma')
    tree.add('5D cavanlaşma', 'Cavanlaşma')
    tree.add('6D cavanlaşma', 'Cavanlaşma')
    tree.add('Göz qapaqlarının lazerlə gəncləşməsi', 'Cavanlaşma')
    tree.add('Əllərin lazerlə gəncləşməsi', 'Cavanlaşma')
    tree.add('Qolaltı və intim bölgələrin lazerlə ağardılması', 'Cavanlaşma')
    tree.add('Ləkələrin lazerlə müalicəsi', 'Cavanlaşma')

    // Sub group 3 Dəri xəstəlikləri
    tree.add('Akne sterilazisiya - 1 seans', 'Dəri xəstəlikləri')
    tree.add('Akne sterilazisiya - 4-8  seans', 'Dəri xəstəlikləri')
    tree.add('Dırnaq göbələyinin lazerlə müalicəsi (10 barmaq)', 'Dəri xəstəlikləri')
    tree.add('Dırnaq göbələyinin lazerlə müalicəsi (1 barmaq)', 'Dəri xəstəlikləri')
    tree.add('Dırnaq göbələyinin lazerlə müalicəsi (baş barmaq)', 'Dəri xəstəlikləri')

    
    // Sub group 3 Trixologiya
    tree.add('Saç tökülməsinin lazerlə müalicəsi - 1 seans', 'Trixologiya')

    // Sub group 3 Qswittched laser
    tree.add('Döymənin (Tatuajın) silinməsi', 'Qswittched laser')


    // Sub group 2 Digər xidmətlər
    tree.add('Konsultasiya', 'Digər xidmətlər')
    tree.add('Kosmetoloji konsultasiya', 'Digər xidmətlər')
    tree.add('İnyeksiyon prosedur', 'Digər xidmətlər')
    tree.add('Dəriyə qulluq prosedurları', 'Digər xidmətlər')
    tree.add('Aparat kosmetologiyası', 'Digər xidmətlər')
    tree.add('Dəri törəməsi müalicəsi', 'Digər xidmətlər')

    // Sub group 3 Konsultasiya
    tree.add('Dermatoloji müayinə və müalicə', 'Konsultasiya')
    tree.add('Dermatoskopla müayinə', 'Konsultasiya')
    tree.add('Trixoloji müayinə və müalicə', 'Konsultasiya')
    tree.add('Saç tökülməsinin müalicəsi', 'Konsultasiya')


    // Sub group 3 Kosmetoloji konsultasiya
    tree.add('Kosmetoloji müayinə', 'Kosmetoloji konsultasiya')


    // Sub group 3 Inyeksiyon prosedur
    tree.add('Qulaq seyvanının gəncləşməsi', 'İnyeksiyon prosedur')
    tree.add('PRP (Plazma) saç ', 'İnyeksiyon prosedur')
    tree.add('PRP (Plazma) üz', 'İnyeksiyon prosedur')
    tree.add('Mezoterapiya saç', 'İnyeksiyon prosedur')
    tree.add('Mezoterapiya üz', 'İnyeksiyon prosedur')
    tree.add('Botox - 3 nah. (alın, qaş arası, öz/ətrafı)', 'İnyeksiyon prosedur')
    tree.add('Botox - göz ətrafı', 'İnyeksiyon prosedur')
    tree.add('Üz ovalının və bədənin digər hissələrinin lipolitiklərlə korreksiyası', 'İnyeksiyon prosedur')
    tree.add('Biorevitalizasiya', 'İnyeksiyon prosedur')
    tree.add('Saplarla üz gərmə', 'İnyeksiyon prosedur')
    tree.add('Boyun və dekolte hissələrində gəncləşmə', 'İnyeksiyon prosedur')
    tree.add('Əllərdə gəncləşmə', 'İnyeksiyon prosedur')
    tree.add('Göz ətrafı kölgələrin, şişkinliklərin müalicəsi', 'İnyeksiyon prosedur')
    tree.add('Əməliyyatsız burun korreksiyası', 'İnyeksiyon prosedur')
    tree.add('Dolğu ', 'İnyeksiyon prosedur')


    // Sub group 3 Dəriyə qulluq prosedurları
    tree.add('Üzün təmizlənməsi (Çistka) ', 'Dəriyə qulluq prosedurları')
    tree.add('Pilinq ', 'Dəriyə qulluq prosedurları')
    tree.add('Dəri tipinə uyğun cild baxımı ', 'Dəriyə qulluq prosedurları')
    tree.add('Dəri tipinə uyğun üzə qulluq ', 'Dəriyə qulluq prosedurları')


    // Sub group 3 Aparat kosmetologiyası
    tree.add('RF müalicə', 'Aparat kosmetologiyası')
    tree.add('Smas lifting', 'Aparat kosmetologiyası')


    // Sub goup 3 dəri törəməsi müalicəsi
    tree.add('Papillomaların koaqulyasiyası', 'Dəri törəməsi müalicəsi')


    return tree;
}

export const tree = getTreeData();


export const getLabel = (category) => {
    let label = '';

    if(category){

        if(tree.findBFS(category).parent === null || tree.findBFS(category).parent === ''){
           
        }
        else {
            if(tree.findBFS(category).parent !== 'Options'){

                label += tree.findBFS(category).parent
                label += ' → ';
            }


            label += tree.findBFS(category).data
            return label
        }
    }

    return label;
}

