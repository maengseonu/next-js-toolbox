export type SideBarMenuItemType = {
    id: number
    title: string
    path: string
};

export const menuItems: SideBarMenuItemType[] = [
    {
        id: 0,
        title: 'Api',
        path: `/menu/api`
    },
    {
        id: 1,
        title: 'Component',
        path: `/menu/component`
    },
    {
        id: 2,
        title: 'Algorithm',
        path: `/menu/algorithm`
    },
];