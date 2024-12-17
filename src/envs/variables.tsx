/**
 * Environmental variables of this side.
 * Yuchen Jin, mailto:cainmagi@gmail.com
 */

import React from "react";
import Link from "@docusaurus/Link";
import {useDocsVersion} from "@docusaurus/plugin-content-docs/client";

import InlineIcon from "../components/InlineIcon";
import mdiDot from "@iconify-icons/mdi/dot";

const docsPluginId = undefined; // Default docs plugin instance

const variables = {
  repoURL: "https://github.com/cainmagi/flask-sqlalchemy-compat",
  rawURL: "https://raw.githubusercontent.com/cainmagi/flask-sqlalchemy-compat",
  sourceVersion: {
    main: "main",
  },
  sourceURIs: {
    main: {
      ".": "__init__.py",
      auto: "auto.py",
      "auto.get_flask_sqlalchemy_lite": "auto.py#L77",
      "auto.get_flask_sqlalchemy": "auto.py#L168",
      "auto.get_flask_sqlalchemy_lite_proxy_ver": "auto.py#L250",
      "auto.get_flask_sqlalchemy_proxy_ver": "auto.py#L271",
      backdict: "backdict.py",
      "backdict.BackDictView": "backdict.py#L68",
      "backdict.BackDict": "backdict.py#L122",
      backends: "backends.py",
      "backends.ModulePlaceholder": "backends.py#L59",
      "backends.conditional_import": "backends.py#L143",
      "backends.is_module_invalid": "backends.py#L160",
      "backends.BackendProxy": "backends.py#L185",
      "backends.proxy": "backends.py#L252",
      flask_sa_api: "flask_sa_api.py",
      "flask_sa_api.SQLAlchemyProxy": "flask_sa_api.py#L74",
      "flask_sa_api.as_flask_sqlalchemy": "flask_sa_api.py#L539",
      flask_sa_lite_api: "flask_sa_lite_api.py",
      "flask_sa_lite_api.SQLAlchemyLiteProxy": "flask_sa_lite_api.py#L75",
      "flask_sa_lite_api.as_flask_sqlalchemy_lite": "flask_sa_lite_api.py#L304",
      protocols: "protocols.py",
      "protocols.ModelProtocol": "protocols.py#L58",
      "protocols.SQLAlchemySharedProtocol": "protocols.py#L83",
      "protocols.SQLAlchemyLiteProtocol": "protocols.py#L98",
      "protocols.SQLAlchemyProtocol": "protocols.py#L161",
      utilities: "utilities.py",
      "utilities.DBNotReadyError": "utilities.py#L71",
      "utilities.hook_classmethod": "utilities.py#L81",
      "utilities.hook_base_model": "utilities.py#L172",
      "utilities.apply_to_engines": "utilities.py#L208",
      "utilities.clone_method": "utilities.py#L254",
      "utilities.clone_function": "utilities.py#L302",
      "utilities.get_app_ctx_id": "utilities.py#L340",
      "utilities.QueryGetter": "utilities.py#L345",
      "utilities.TableNameGetter": "utilities.py#L410",
    },
  },
};

const useCurrentSourceVersion = (): string => {
  const versionHook = useDocsVersion();
  const versionLabel = versionHook?.label;
  return (
    variables.sourceVersion[versionLabel] || variables.sourceVersion["main"]
  );
};

export const rawURL = (url: string): string => {
  return variables.rawURL + "/" + url;
};

export const repoURL = (url: string | undefined = undefined): string => {
  return url ? variables.repoURL + "/" + url : variables.repoURL;
};

export const releaseURL = (ver: string | undefined = undefined): string => {
  const _ver = ver?.toLowerCase() === "next" ? "main" : ver;
  const version = variables.sourceVersion[_ver] || useCurrentSourceVersion();
  if (version === "main" || _ver === "main") {
    return variables.repoURL + "/releases/latest";
  }
  return variables.repoURL + "/releases/tag/" + version;
};

export const rootURL = (url: string): string => {
  const currentSourceVersion = useCurrentSourceVersion();
  return variables.repoURL + "/blob/" + currentSourceVersion + "/" + url;
};

const getURIByVersionPath = (path: string, ver: string): string => {
  const routes = typeof path === "string" ? path.trim() : "";
  if (routes.length === 0) {
    return path;
  }
  const currentURI = variables.sourceURIs[ver] || variables.sourceURIs["main"];
  return currentURI[path] || path;
};

export const sourceURL = (url: string): string => {
  const currentSourceVersion = useCurrentSourceVersion();
  return (
    variables.repoURL +
    "/blob/" +
    currentSourceVersion +
    "/flask_sqlalchemy_compat/" +
    getURIByVersionPath(url, currentSourceVersion)
  );
};

export const demoURL = (url?: string): string => {
  const currentSourceVersion = useCurrentSourceVersion();
  if (!url) {
    return variables.repoURL + "/blob/" + currentSourceVersion + "/usage.py";
  }
  return (
    variables.repoURL + "/blob/" + currentSourceVersion + "/examples/" + url
  );
};

export type SourceLinkProps = {
  url: string;
  children: React.ReactNode;
};

export const SourceLink = ({url, children}: SourceLinkProps): JSX.Element => {
  return (
    <Link to={sourceURL(url)} className="noline">
      {children}
    </Link>
  );
};

export type SplitterProps = {
  padx?: string;
};

export const Splitter = ({padx = "0"}: SplitterProps): JSX.Element => {
  return (
    <span style={{padding: "0 " + padx}}>
      <InlineIcon icon={mdiDot} />
    </span>
  );
};
