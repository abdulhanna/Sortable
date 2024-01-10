# Sortable

# dnd-sortable

This is sortable drag and drop

## Installation

Install my-project with npm

```bash
  npm install dnd-sortable
  cd my-project
```

## Acknowledgements

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## Usage/Examples

````javascript

import SortableList from 'dnd-sortable'

``` const [items, setItems] = useState( [
      {
            id: 1,
            text: 'Write a cool JS library',
            title:"this is Library titile"
          },
          {
            id: 2,
            text: 'Make it generic enough',
            title:"this is Library titile"
          },
          {
            id: 3,
            text: 'Write README',
            title:"this is Library titile"
          },
          {
            id: 4,
            text: 'Create some examples',
            title:"this is Library titile"
          }, {
                  id: 5,
                  text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
                  title:"this is Library titile"
                },
                {
                  id: 6,
                  text: '???',
                  title:"this is Library titile"
                },
                {
                  id: 7,
                  text: 'PROFIT',
                  title:"this is Library titile"
                }
              ]);

              const handleMove = (node)=>{
                  // you can get updated  data after drag drop
              }


<SortableList data= {data} handleMove={handleMove}/>

## Authors

- [@abdulhanna](https://github.com/abdulhanna)


## 🚀 About Me
I'm a full stack developer...

````
