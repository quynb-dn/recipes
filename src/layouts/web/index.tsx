"use client";

import { PropsWithChildren } from "react";
import { Box, Container, Stack, styled } from "@mui/material";

import { Header } from "./Header/Header";
import { Breadcrumb, Breadcrumbs } from "./Breadcrumbs/Breadcrumbs";

const MainContent = styled(Box)(() => ({
  paddingTop: 10,
  paddingBottom: 40,
}));

interface WebLayoutProps {
  breadcrumbs?: Breadcrumb[];
}

export const WebLayout = ({
  children,
  breadcrumbs,
}: PropsWithChildren<WebLayoutProps>) => {
  const hasBreadcrumbs = Boolean(breadcrumbs?.length);
  return (
    <Stack spacing={2} width="100%">
      <Header />
      <MainContent>
        <Container>
          <Stack spacing={3} width="100%">
            {hasBreadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs!} />}
            <Box>{children}</Box>
          </Stack>
        </Container>
      </MainContent>
    </Stack>
  );
};
