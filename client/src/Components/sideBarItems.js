import HomeIcon from '@mui/icons-material/Home';
export default {
    "data": [
        {
            "name": `Home`,
            "url": "/home",
            "icon": "HomeIcon"
        },

        {
            "name": "Content",
            "children": [
                {
                    "name": "Courses",
                    "url": "/courses"
                },
                {
                    "name": "Collection",
                    "url": "/collection"
                },
                {
                    "name": "Quizes",
                    "url": "/quizes"
                }
            ]
        },
        {
            "name": "Users",
            "children": [
                {
                    "name": "Owner",
                    "url": "/owner"
                },
                {
                    "name": "Admins",
                    "url": "/admin"
                }, {
                    "name": "Users",
                    "url": "/users"
                }
            ]
        }
    ]
}