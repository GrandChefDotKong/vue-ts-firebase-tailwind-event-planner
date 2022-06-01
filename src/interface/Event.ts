interface Event {
    id: string,
    title: string,
    description: string,
    location: string,
    dates: Date,
    creatorId: string,
    creatorName: string,
    participants: string[],
}

export default Event;