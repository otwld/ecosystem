import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
}

export interface Client {
  __typename?: 'Client';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  logo: Resource;
  name: Scalars['String'];
  updatedAt: Scalars['String'];
  website: Scalars['String'];
}

export interface EventsOrderBy {
  direction?: InputMaybe<EDirection>;
  field?: InputMaybe<EListProjectsInputSortFields>;
}

export interface GetResourceUrlInputDto {
  size: ResourceSizes;
}

export interface ListMediasFilter {
  memberId?: InputMaybe<Scalars['String']>;
}

export interface ListMediasPage {
  __typename?: 'ListMediasPage';
  edges: Array<Maybe<PaginatedMediaPageEdge>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
}

export interface ListMemberPage {
  __typename?: 'ListMemberPage';
  edges: Array<Maybe<PaginatedMemberPageEdge>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
}

export interface ListProjectsFilter {
  memberId?: InputMaybe<Scalars['String']>;
}

export interface ListProjectsPage {
  __typename?: 'ListProjectsPage';
  edges: Array<Maybe<PaginatedProjectPageEdge>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
}

export interface ListServicePage {
  __typename?: 'ListServicePage';
  edges: Array<Maybe<PaginatedServicePageEdge>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
}

export interface Location {
  __typename?: 'Location';
  city: Scalars['String'];
  country: Scalars['String'];
  fullLocation: Scalars['String'];
  street?: Maybe<Scalars['String']>;
}

export interface Media {
  __typename?: 'Media';
  _id: Scalars['String'];
  author: Scalars['String'];
  createdAt: Scalars['DateTime'];
  image?: Maybe<Resource>;
  link: Scalars['String'];
  logo?: Maybe<Resource>;
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['String'];
}

export interface MediasOrderBy {
  direction?: InputMaybe<EDirection>;
  field?: InputMaybe<EListMediasInputSortFields>;
}

export interface Member {
  __typename?: 'Member';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  jobTitle: Scalars['String'];
  lastName: Scalars['String'];
  location?: Maybe<Location>;
  medias: ListMediasPage;
  picture?: Maybe<Resource>;
  projects: ListProjectsPage;
  services: Array<Service>;
  skills: Array<MemberSkill>;
  slug: Scalars['String'];
  socials: Array<MemberSocial>;
  testimonials: Array<Testimonial>;
  updatedAt: Scalars['String'];
  workModes: Array<MemberWorkMode>;
}


export interface MemberMediasArgs {
  criteria?: InputMaybe<ListMediasFilter>;
  order?: InputMaybe<MediasOrderBy>;
  pagination: PaginationOption;
}


export interface MemberProjectsArgs {
  criteria?: InputMaybe<ListProjectsFilter>;
  order?: InputMaybe<EventsOrderBy>;
  pagination: PaginationOption;
}

export interface MemberOrderBy {
  direction?: InputMaybe<EDirection>;
  field?: InputMaybe<EListMembersInputSortFields>;
}

export interface MemberSkill {
  __typename?: 'MemberSkill';
  level: Scalars['Float'];
  skill: Skill;
  startDate: Scalars['DateTime'];
  yearOfExperience: Scalars['String'];
}

export interface MemberSocial {
  __typename?: 'MemberSocial';
  icon: Scalars['String'];
  link: Scalars['String'];
  serviceName: Scalars['String'];
}

export interface MemberWorkMode {
  __typename?: 'MemberWorkMode';
  description: Scalars['String'];
  workMode: WorkMode;
}

export interface PageInfo {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['String']>;
}

export interface PaginatedMediaPageEdge {
  __typename?: 'PaginatedMediaPageEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Media>;
}

export interface PaginatedMemberPageEdge {
  __typename?: 'PaginatedMemberPageEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Member>;
}

export interface PaginatedProjectPageEdge {
  __typename?: 'PaginatedProjectPageEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Project>;
}

export interface PaginatedServicePageEdge {
  __typename?: 'PaginatedServicePageEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Service>;
}

export interface PaginationOption {
  after?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['String']>;
}

export interface Project {
  __typename?: 'Project';
  _id: Scalars['String'];
  clients: Array<Client>;
  createdAt: Scalars['DateTime'];
  endDate?: Maybe<Scalars['DateTime']>;
  endDateLabel?: Maybe<Scalars['String']>;
  image: Resource;
  members: Array<Member>;
  nextProject?: Maybe<Project>;
  previousProject?: Maybe<Project>;
  services: Array<Service>;
  skills: Array<Skill>;
  slug: Scalars['String'];
  startDate: Scalars['DateTime'];
  startDateLabel: Scalars['String'];
  template: Scalars['String'];
  testimonials: Array<Testimonial>;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
}

export interface Query {
  __typename?: 'Query';
  getAllClients: Array<Client>;
  getAllMembers: Array<Member>;
  getAllServices: Array<Service>;
  getMemberById: Member;
  getMemberBySlug: Member;
  getMembers: ListMemberPage;
  getOneRandomMemberSlug: Scalars['String'];
  getProjectBySlug: Project;
  getProjects: ListProjectsPage;
  getRelatedProjects: Array<Project>;
  getService: Service;
  getServicesPaginated: ListServicePage;
}


export interface QueryGetMemberByIdArgs {
  id: Scalars['String'];
}


export interface QueryGetMemberBySlugArgs {
  slug: Scalars['String'];
}


export interface QueryGetMembersArgs {
  order?: InputMaybe<MemberOrderBy>;
  pagination: PaginationOption;
}


export interface QueryGetProjectBySlugArgs {
  slug: Scalars['String'];
}


export interface QueryGetProjectsArgs {
  criteria?: InputMaybe<ListProjectsFilter>;
  order?: InputMaybe<EventsOrderBy>;
  pagination: PaginationOption;
}


export interface QueryGetRelatedProjectsArgs {
  slug: Scalars['String'];
}


export interface QueryGetServiceArgs {
  slug: Scalars['String'];
}


export interface QueryGetServicesPaginatedArgs {
  order?: InputMaybe<ServiceOrderBy>;
  pagination: PaginationOption;
}

export interface Resource {
  __typename?: 'Resource';
  name: Scalars['String'];
  originalName: Scalars['String'];
  url: Scalars['String'];
}


export interface ResourceUrlArgs {
  options: GetResourceUrlInputDto;
}

export enum ResourceSizes {
  Medium = 'MEDIUM',
  Original = 'ORIGINAL',
  Small = 'SMALL'
}

export interface Service {
  __typename?: 'Service';
  _id: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  icon: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
}

export interface ServiceOrderBy {
  direction?: InputMaybe<EDirection>;
  field?: InputMaybe<EListServicesInputSortFields>;
}

export interface Skill {
  __typename?: 'Skill';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
}

export interface Testimonial {
  __typename?: 'Testimonial';
  _id: Scalars['String'];
  author: TestimonialAuthor;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  members: Array<Member>;
  project: Project;
  updatedAt: Scalars['String'];
}

export interface TestimonialAuthor {
  __typename?: 'TestimonialAuthor';
  firstName: Scalars['String'];
  image: Resource;
  job: Scalars['String'];
  lastName: Scalars['String'];
}

export interface WorkMode {
  __typename?: 'WorkMode';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
}

export enum EDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum EListMediasInputSortFields {
  CreatedAt = 'createdAt'
}

export enum EListMembersInputSortFields {
  FirstName = 'firstName'
}

export enum EListProjectsInputSortFields {
  CreatedAt = 'createdAt'
}

export enum EListServicesInputSortFields {
  FirstName = 'firstName'
}

export type GetAllClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllClientsQuery = { __typename?: 'Query', getAllClients: Array<{ __typename?: 'Client', name: string, website: string, logo: { __typename?: 'Resource', url: string } }> };

export type GetMembersPaginatedQueryVariables = Exact<{
  pagination: PaginationOption;
}>;


export type GetMembersPaginatedQuery = { __typename?: 'Query', getMembers: { __typename?: 'ListMemberPage', edges: Array<{ __typename?: 'PaginatedMemberPageEdge', node?: { __typename?: 'Member', _id: string, createdAt: any, updatedAt: string, firstName: string } | null } | null>, pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null, hasPrevPage?: boolean | null, startCursor?: string | null, endCursor?: string | null } | null } };

export type GetRandomMemberSlugQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRandomMemberSlugQuery = { __typename?: 'Query', getOneRandomMemberSlug: string };

export type GetAllMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMembersQuery = { __typename?: 'Query', getAllMembers: Array<{ __typename?: 'Member', fullName: string, slug: string, jobTitle: string, picture?: { __typename?: 'Resource', url: string } | null, socials: Array<{ __typename?: 'MemberSocial', icon: string, link: string }> }> };

export type GetMemberBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetMemberBySlugQuery = { __typename?: 'Query', getMemberBySlug: { __typename?: 'Member', _id: string, firstName: string, lastName: string, jobTitle: string, location?: { __typename?: 'Location', fullLocation: string } | null, picture?: { __typename?: 'Resource', url: string } | null, socials: Array<{ __typename?: 'MemberSocial', icon: string, link: string, serviceName: string }>, services: Array<{ __typename?: 'Service', title: string, slug: string, description: string, icon: string }>, skills: Array<{ __typename?: 'MemberSkill', level: number, yearOfExperience: string, skill: { __typename?: 'Skill', name: string } }>, projects: { __typename?: 'ListProjectsPage', edges: Array<{ __typename?: 'PaginatedProjectPageEdge', node?: { __typename?: 'Project', _id: string, title: string, slug: string, services: Array<{ __typename?: 'Service', title: string, slug: string }>, image: { __typename?: 'Resource', url: string } } | null } | null> }, workModes: Array<{ __typename?: 'MemberWorkMode', workMode: { __typename?: 'WorkMode', name: string } }>, medias: { __typename?: 'ListMediasPage', edges: Array<{ __typename?: 'PaginatedMediaPageEdge', node?: { __typename?: 'Media', _id: string, title: string, link: string, type: string, image?: { __typename?: 'Resource', url: string } | null, logo?: { __typename?: 'Resource', url: string } | null } | null } | null> }, testimonials: Array<{ __typename?: 'Testimonial', content: string, author: { __typename?: 'TestimonialAuthor', firstName: string, lastName: string, job: string, image: { __typename?: 'Resource', url: string } } }> } };

export type GetProjectBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetProjectBySlugQuery = { __typename?: 'Query', getProjectBySlug: { __typename?: 'Project', _id: string, title: string, slug: string, endDateLabel?: string | null, startDateLabel: string, template: string, services: Array<{ __typename?: 'Service', title: string }>, nextProject?: { __typename?: 'Project', slug: string } | null, previousProject?: { __typename?: 'Project', slug: string } | null, image: { __typename?: 'Resource', url: string }, clients: Array<{ __typename?: 'Client', name: string }>, members: Array<{ __typename?: 'Member', slug: string, firstName: string, lastName: string, picture?: { __typename?: 'Resource', url: string } | null }> } };

export type GetProjectsPaginatedQueryVariables = Exact<{
  pagination: PaginationOption;
}>;


export type GetProjectsPaginatedQuery = { __typename?: 'Query', getProjects: { __typename?: 'ListProjectsPage', edges: Array<{ __typename?: 'PaginatedProjectPageEdge', node?: { __typename?: 'Project', title: string, slug: string, services: Array<{ __typename?: 'Service', title: string }>, image: { __typename?: 'Resource', url: string, name: string, originalName: string } } | null } | null> } };

export type GetRelatedProjectsQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetRelatedProjectsQuery = { __typename?: 'Query', getRelatedProjects: Array<{ __typename?: 'Project', title: string, slug: string, services: Array<{ __typename?: 'Service', title: string }>, image: { __typename?: 'Resource', url: string, name: string, originalName: string } }> };

export type CarouselProjectFragment = { __typename?: 'Project', title: string, slug: string, services: Array<{ __typename?: 'Service', title: string }>, image: { __typename?: 'Resource', url: string, name: string, originalName: string } };

export type GetServicesPaginatedForHomeQueryVariables = Exact<{
  pagination: PaginationOption;
}>;


export type GetServicesPaginatedForHomeQuery = { __typename?: 'Query', getServicesPaginated: { __typename?: 'ListServicePage', edges: Array<{ __typename?: 'PaginatedServicePageEdge', node?: { __typename?: 'Service', title: string, icon: string, slug: string } | null } | null>, pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null, hasPrevPage?: boolean | null, startCursor?: string | null, endCursor?: string | null } | null } };

export type GetAllServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllServicesQuery = { __typename?: 'Query', getAllServices: Array<{ __typename?: 'Service', title: string, icon: string, slug: string }> };

export type GetServiceBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetServiceBySlugQuery = { __typename?: 'Query', getService: { __typename?: 'Service', content: string, title: string, slug: string } };

export const CarouselProjectFragmentDoc = gql`
    fragment carouselProject on Project {
  title
  slug
  services {
    title
  }
  image {
    url(options: {size: ORIGINAL})
    name
    originalName
  }
}
    `;
export const GetAllClientsDocument = gql`
    query getAllClients {
  getAllClients {
    name
    logo {
      url(options: {size: ORIGINAL})
    }
    website
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllClientsGQL extends Apollo.Query<GetAllClientsQuery, GetAllClientsQueryVariables> {
    override document = GetAllClientsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetMembersPaginatedDocument = gql`
    query getMembersPaginated($pagination: PaginationOption!) {
  getMembers(pagination: $pagination) {
    edges {
      node {
        _id
        createdAt
        updatedAt
        firstName
      }
    }
    pageInfo {
      hasNextPage
      hasPrevPage
      startCursor
      endCursor
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMembersPaginatedGQL extends Apollo.Query<GetMembersPaginatedQuery, GetMembersPaginatedQueryVariables> {
    override document = GetMembersPaginatedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetRandomMemberSlugDocument = gql`
    query getRandomMemberSlug {
  getOneRandomMemberSlug
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRandomMemberSlugGQL extends Apollo.Query<GetRandomMemberSlugQuery, GetRandomMemberSlugQueryVariables> {
    override document = GetRandomMemberSlugDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllMembersDocument = gql`
    query getAllMembers {
  getAllMembers {
    fullName
    slug
    picture {
      url(options: {size: ORIGINAL})
    }
    jobTitle
    socials {
      icon
      link
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllMembersGQL extends Apollo.Query<GetAllMembersQuery, GetAllMembersQueryVariables> {
    override document = GetAllMembersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetMemberBySlugDocument = gql`
    query getMemberBySlug($slug: String!) {
  getMemberBySlug(slug: $slug) {
    _id
    firstName
    lastName
    jobTitle
    location {
      fullLocation
    }
    picture {
      url(options: {size: ORIGINAL})
    }
    socials {
      icon
      link
      serviceName
    }
    services {
      title
      slug
      description
      icon
    }
    skills {
      level
      yearOfExperience
      skill {
        name
      }
    }
    projects(pagination: {after: 3}) {
      edges {
        node {
          _id
          title
          slug
          services {
            title
            slug
          }
          image {
            url(options: {size: ORIGINAL})
          }
        }
      }
    }
    workModes {
      workMode {
        name
      }
    }
    medias(pagination: {after: 5}) {
      edges {
        node {
          _id
          title
          link
          type
          image {
            url(options: {size: ORIGINAL})
          }
          logo {
            url(options: {size: ORIGINAL})
          }
        }
      }
    }
    testimonials {
      author {
        firstName
        lastName
        job
        image {
          url(options: {size: ORIGINAL})
        }
      }
      content
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMemberBySlugGQL extends Apollo.Query<GetMemberBySlugQuery, GetMemberBySlugQueryVariables> {
    override document = GetMemberBySlugDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetProjectBySlugDocument = gql`
    query getProjectBySlug($slug: String!) {
  getProjectBySlug(slug: $slug) {
    _id
    title
    services {
      title
    }
    slug
    nextProject {
      slug
    }
    previousProject {
      slug
    }
    image {
      url(options: {size: ORIGINAL})
    }
    endDateLabel
    startDateLabel
    template
    clients {
      name
    }
    members {
      slug
      firstName
      lastName
      picture {
        url(options: {size: ORIGINAL})
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProjectBySlugGQL extends Apollo.Query<GetProjectBySlugQuery, GetProjectBySlugQueryVariables> {
    override document = GetProjectBySlugDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetProjectsPaginatedDocument = gql`
    query getProjectsPaginated($pagination: PaginationOption!) {
  getProjects(pagination: $pagination) {
    edges {
      node {
        ...carouselProject
      }
    }
  }
}
    ${CarouselProjectFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProjectsPaginatedGQL extends Apollo.Query<GetProjectsPaginatedQuery, GetProjectsPaginatedQueryVariables> {
    override document = GetProjectsPaginatedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetRelatedProjectsDocument = gql`
    query getRelatedProjects($slug: String!) {
  getRelatedProjects(slug: $slug) {
    ...carouselProject
  }
}
    ${CarouselProjectFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRelatedProjectsGQL extends Apollo.Query<GetRelatedProjectsQuery, GetRelatedProjectsQueryVariables> {
    override document = GetRelatedProjectsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetServicesPaginatedForHomeDocument = gql`
    query getServicesPaginatedForHome($pagination: PaginationOption!) {
  getServicesPaginated(pagination: $pagination) {
    edges {
      node {
        title
        icon
        slug
      }
    }
    pageInfo {
      hasNextPage
      hasPrevPage
      startCursor
      endCursor
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetServicesPaginatedForHomeGQL extends Apollo.Query<GetServicesPaginatedForHomeQuery, GetServicesPaginatedForHomeQueryVariables> {
    override document = GetServicesPaginatedForHomeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllServicesDocument = gql`
    query getAllServices {
  getAllServices {
    title
    icon
    slug
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllServicesGQL extends Apollo.Query<GetAllServicesQuery, GetAllServicesQueryVariables> {
    override document = GetAllServicesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetServiceBySlugDocument = gql`
    query getServiceBySlug($slug: String!) {
  getService(slug: $slug) {
    content
    title
    slug
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetServiceBySlugGQL extends Apollo.Query<GetServiceBySlugQuery, GetServiceBySlugQueryVariables> {
    override document = GetServiceBySlugDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }