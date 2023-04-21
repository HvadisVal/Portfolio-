import {ref} from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id:1,
            title: 'Portfolio 1',
           /*  LinkdIn: www,
            tech: [Vue],
            featured: true, */
            description: 'This is portfolio 1',
            image: 'https://picsum.photos/200/300',
            link: 'https://google.com',
            category: 'Web',
            website: 'https://www.linkedin.com/',
            tech:"Vue, Node, Express, MongoDB",
            date:"2023-03-22",
            teammembers: ["John","Jane", "Joe"]
        },
        {
            id:2,
            title: 'Portfolio 2',
            description: 'This is portfolio 1',
            image: 'https://picsum.photos/200/300',
            link: 'https://google.com',
            category: 'Video',
        },
        {
            id:3,
            title: 'Portfolio 4342',
            description: 'This is portfolio 2342423',
            image: 'https://picsum.photos/200/300',
            link: 'https://google.com',
            category: 'Video',
        },
    ])
    return {
        state
    }
}

export default getPortfolio