
function customRender(reactElement, container){

  /*  
   const domElements = document.createElement(reactElement.type)
   domElements.innerHTML = reactElement.children
   domElements.setAttribute('href', reactElement.props.href)
   domElements.setAttribute('target', reactElement.props.target)

   container.appendChild(domElements)
   */

   const domElements = document.createElement(reactElement.type)
   domElements.innerHTML = reactElement.children

   for (const prop in reactElement.props) {
    if(prop === 'children') continue;
    domElements.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElements)
}



const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)