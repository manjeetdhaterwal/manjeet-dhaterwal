export default {
    name: 'project',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            title: 'Project Title',
            name: 'title',
            type: 'string'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Project Image',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
        },
        {
            title: 'Project Link',
            name: 'href',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        }
    ]
}