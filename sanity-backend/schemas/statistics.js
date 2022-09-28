export default {
    name: 'statistics',
    type: 'document',
    title: 'Statistics',
    fields: [
        {
            title: 'Finished Projects',
            name: 'finishedProjects',
            type: 'number'
        },
        {
            title: 'Bug Fixed',
            name: 'bugFixed',
            type: 'string'
        },
        {
            name: 'awardwin',
            type: 'number',
            title: 'Award Win',
        },
        {
            name: 'happyclient',
            type: 'string',
            title: 'Happy Client',
        }
    ]
}