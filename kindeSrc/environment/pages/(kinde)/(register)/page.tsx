"use server";

import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";
import { WidgetCard } from "../../../../components/WidgetCard/WidgetCard";
import { DefaultLayout } from "../../../../layouts/Default/Default";
import { Root } from "../../../../root";

const DefaultPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Root context={context} request={request}>
      <DefaultLayout isRegisterPage={true}>
        <WidgetCard
          heading={context.widget.content.heading}
          description={context.widget.content.description}
        />
      </DefaultLayout>
    </Root>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await DefaultPage(event);
  return renderToString(page);
}
