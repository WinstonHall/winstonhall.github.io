export function JobDescription({
    jobTitle = 'Missing Job Title',
    companyName = 'Missing Company Name',
    startDate = 'January 1900',
    endDate = 'Present',
    jobDescriptions = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos, placeat soluta dolorem suscipit natus facilis doloremque?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos, placeat soluta dolorem suscipit natus facilis doloremque?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos, placeat soluta dolorem suscipit natus facilis doloremque?',
    ],
}) {
    // Header with job title and company/employer
    // Time Frame Working there
    // List items describing key things I did.
    return (
        <div className='job_description'>
            <h3>{`${jobTitle} @ ${companyName}`}</h3>
            <h5>{`${startDate} - ${endDate}`}</h5>
            <ul className='wrap_list row_1'>
                {jobDescriptions.map(function (description, index) {
                    return (
                        <li key={`jobDescription-${index}`}>{description}</li>
                    )
                })}
            </ul>
        </div>
    )
}
