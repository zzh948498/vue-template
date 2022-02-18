const title = 'gaga';

export default function getPageTitle(pageTitle: string) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`;
    }
    return `${title}`;
}
