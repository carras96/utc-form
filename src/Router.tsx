import { createBrowserRouter, RouterProvider, useLocation, useNavigate } from 'react-router-dom';
import { AppShell, Avatar, Burger, Flex, NavLink, rem, Text } from '@mantine/core';
import { ReactNode } from 'react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconChevronRight, IconTruckDelivery, IconBuildingFactory } from '@tabler/icons-react';
import { HomePage } from './pages/Home.page';
import ManufacturingEnterprisePage from './pages/ManufacturingEnterprise.page';
import TransportationEnterprisePage from './pages/TransportationEnterprise.page';
import Logo from './assets/images/LogoUTC.jpg';
import globalCss from './styles/global.module.css';
import SwitchThemeButton from './components/SwitchThemeButton';

const AppShellWrapper = ({ children }: { children: ReactNode }) => {
  const [opened, { toggle, close }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isMobileSmall = useMediaQuery('(max-width: 460px)');
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppShell
      transitionDuration={500}
      transitionTimingFunction="ease"
      header={{ height: isMobile ? 72 : 90 }}
      navbar={{
        width: 330,
        breakpoint: 'md',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex gap={rem(12)} align="center" justify="flex-start" px={rem(24)} h="100%">
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" />
          <Flex
            gap={rem(8)}
            align="center"
            justify="flex-start"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              navigate('/');
              close();
            }}
          >
            <Avatar src={Logo} alt="logo" size={isMobile ? 48 : 64} />
            <Flex gap={rem(4)} align="flex-start" justify="center" direction="column">
              <Text className={globalCss.logoText}>TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI</Text>
              {!isMobileSmall && (
                <Text className={globalCss.logoSubText}>
                  UNIVERSITY OF TRANSPORT AND COMMUNICATIONS
                </Text>
              )}
            </Flex>
          </Flex>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md" pb={rem(isMobile ? 50 : 100)}>
        <Flex direction="column" justify="space-between" h="100%">
          <Flex direction="column" gap={rem(8)}>
            <NavLink
              onClick={() => {
                navigate('/transportation-enterprise');
                close();
              }}
              label="Doanh nghiệp vận tải"
              leftSection={<IconTruckDelivery size="1rem" stroke={1.5} />}
              rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
              variant="subtle"
              active={location.pathname === '/transportation-enterprise'}
            />
            <NavLink
              onClick={() => {
                navigate('/manufacturing-enterprise');
                close();
              }}
              label="Doanh nghiệp sản xuất, kinh doanh"
              leftSection={<IconBuildingFactory size="1rem" stroke={1.5} />}
              rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
              variant="subtle"
              active={location.pathname === '/manufacturing-enterprise'}
            />
          </Flex>
          <Flex justify="flex-start">
            <SwitchThemeButton />
          </Flex>
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppShellWrapper>
        <HomePage />
      </AppShellWrapper>
    ),
  },
  {
    path: '/manufacturing-enterprise',
    element: (
      <AppShellWrapper>
        <ManufacturingEnterprisePage />
      </AppShellWrapper>
    ),
  },
  {
    path: '/transportation-enterprise',
    element: (
      <AppShellWrapper>
        <TransportationEnterprisePage />
      </AppShellWrapper>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
