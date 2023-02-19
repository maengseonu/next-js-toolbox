import { Color } from "@/constants/color";
import { menuItems, SideBarMenuItemType } from "@/constants/menu";
import { Button, SxProps, Theme } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const AppSideBarLayout = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
    height: 100%;
    padding: 20px 10px 20px 10px;
    gap: 10px;

    word-break: break-all;

    overflow-y: auto;

    border-right: 1px;
    border-style: solid;
    border-color: ${Color.borderColor.grey};
`

export const AppSideBar = () => {
    const router = useRouter();

    const [ selectedMenu, setSelectedMenu ] = useState<SideBarMenuItemType>();

    const SideBar = useCallback(() => {
        const menuButtonSx = (menu: SideBarMenuItemType): SxProps<Theme> => ({
            color: 'black',
            fontWeight: menu.id === selectedMenu?.id ? 'bold' : null,
            ":hover": {
                fontWeight: 'bold',
            },
        });

        const handleOnClickMenu = (menu: SideBarMenuItemType) => {
            if (menu.id === selectedMenu?.id) return;

            setSelectedMenu(menu);
            router.replace(menu.path);
        };
        
        return (
          <>
            {menuItems.map((menu, index) => {
              return (
                  <Button
                      fullWidth
                      key={index}
                      variant='text'
                      size="small"
                      sx={menuButtonSx(menu)}
                      onClick={() => handleOnClickMenu(menu)}
                  >
                      {menu.title}
                  </Button>
              )
            })}
          </>
        )
    },[selectedMenu]);

    return (
        <AppSideBarLayout>
            <SideBar />
        </AppSideBarLayout>
    )

};