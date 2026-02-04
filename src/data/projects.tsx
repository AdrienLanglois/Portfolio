export type ProjectCategory = 'all' | 'web' | 'game' | 'ai' | 'software' | 'algorithm'

export interface Project {
    title: string,
	slug: string,
	desc: string,
	mediaSrc: string,
	duration: string,
	teamMembersCount: number,
    category: ProjectCategory
	technos: string[],
}

export const PROJECTS: Project[] = [
    {
        title: "My Project",
        slug: 'my-project',
        desc: `This is my incredible project with a pretty long description so that I can test if the 
            the text fills correctly the card. I like Mashmallow (not sure how to write this word but it's good enough)`,
        mediaSrc: 'src/assets/projectGif/Screencast-from-2026-01-23-15-50-53.mp4',
        duration: '1 month',
        teamMembersCount: 3,
        category: 'software',
        technos: ["C#", "Unity"] 
    },
    {
        title: "Bomberman",
        slug: 'bomberman',
        desc: `A unique web version of the original Bomberman game`,
        mediaSrc: 'src/assets/projectGif/Screencast-from-2026-01-23-15-50-53.mp4',
        duration: '1 week',
        teamMembersCount: 1,
        category: 'game',
        technos: ["JS", "HTML/CSS"] 
    },
    {
        title: "My Project",
        slug: 'my-project',
        desc: `This is my incredible project with a pretty long description so that I can test if the 
            the text fills correctly the card. I like Mashmallow (not sure how to write this word but it's good enough)`,
        mediaSrc: 'src/assets/projectGif/Screencast-from-2026-01-23-15-50-53.mp4',
        duration: '1 month',
        teamMembersCount: 3,
        category: 'software',
        technos: ["C#", "Unity"] 
    },
    {
        title: "Bomberman",
        slug: 'bomberman',
        desc: `A unique web version of the original Bomberman game`,
        mediaSrc: 'src/assets/projectGif/Screenshot from 2026-01-29 16-20-39.png',
        duration: '1 week',
        teamMembersCount: 1,
        category: 'game',
        technos: ["JS", "HTML/CSS"] 
    },
    {
        title: "My Project",
        slug: 'my-project',
        desc: `This is my incredible project with a pretty long description so that I can test if the 
            the text fills correctly the card. I like Mashmallow (not sure how to write this word but it's good enough)`,
        mediaSrc: 'src/assets/projectGif/Screencast-from-2026-01-23-15-50-53.mp4',
        duration: '1 month',
        teamMembersCount: 3,
        category: 'software',
        technos: ["C#", "Unity"] 
    },
    {
        title: "Bomberman",
        slug: 'bomberman',
        desc: `A unique web version of the original Bomberman game`,
        mediaSrc: 'src/assets/projectGif/Screencast-from-2026-01-23-15-50-53.mp4',
        duration: '1 week',
        teamMembersCount: 1,
        category: 'game',
        technos: ["JS", "HTML/CSS"] 
    },
]