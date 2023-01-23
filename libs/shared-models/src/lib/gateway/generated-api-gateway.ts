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

export interface EventsOrderBy {
  direction?: InputMaybe<EDirection>;
  field?: InputMaybe<EListProjectsInputSortFields>;
}

export interface GetResourceUrlInputDto {
  size: ResourceSizes;
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

export interface Member {
  __typename?: 'Member';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  jobTitle: Scalars['String'];
  lastName: Scalars['String'];
  location?: Maybe<Location>;
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
  createdAt: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  image: Resource;
  members: Array<Member>;
  services: Array<Service>;
  skills: Array<Skill>;
  slug: Scalars['String'];
  startDate: Scalars['DateTime'];
  testimonials: Array<Testimonial>;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
}

export interface Query {
  __typename?: 'Query';
  getMemberById: Member;
  getMemberBySlug: Member;
  getMembers: ListMemberPage;
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

export enum EListMembersInputSortFields {
  FirstName = 'firstName'
}

export enum EListProjectsInputSortFields {
  CreatedAt = 'createdAt'
}

export enum EListServicesInputSortFields {
  FirstName = 'firstName'
}

export type GetMembersPaginatedQueryVariables = Exact<{
  pagination: PaginationOption;
}>;


export type GetMembersPaginatedQuery = { __typename?: 'Query', getMembers: { __typename?: 'ListMemberPage', edges: Array<{ __typename?: 'PaginatedMemberPageEdge', node?: { __typename?: 'Member', _id: string, createdAt: any, updatedAt: string, firstName: string } | null } | null>, pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null, hasPrevPage?: boolean | null, startCursor?: string | null, endCursor?: string | null } | null } };

export type GetMemberBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetMemberBySlugQuery = { __typename?: 'Query', getMemberBySlug: { __typename?: 'Member', _id: string, firstName: string, lastName: string, jobTitle: string, location?: { __typename?: 'Location', fullLocation: string } | null, picture?: { __typename?: 'Resource', url: string } | null, socials: Array<{ __typename?: 'MemberSocial', icon: string, link: string, serviceName: string }>, services: Array<{ __typename?: 'Service', title: string, slug: string, description: string, icon: string }>, skills: Array<{ __typename?: 'MemberSkill', level: number, yearOfExperience: string, skill: { __typename?: 'Skill', name: string } }>, projects: { __typename?: 'ListProjectsPage', edges: Array<{ __typename?: 'PaginatedProjectPageEdge', node?: { __typename?: 'Project', _id: string, title: string, slug: string, services: Array<{ __typename?: 'Service', title: string, slug: string }>, image: { __typename?: 'Resource', url: string } } | null } | null> }, workModes: Array<{ __typename?: 'MemberWorkMode', workMode: { __typename?: 'WorkMode', name: string } }>, testimonials: Array<{ __typename?: 'Testimonial', content: string, author: { __typename?: 'TestimonialAuthor', firstName: string, lastName: string, job: string, image: { __typename?: 'Resource', url: string } } }> } };

export type GetServicesPaginatedForHomeQueryVariables = Exact<{
  pagination: PaginationOption;
}>;


export type GetServicesPaginatedForHomeQuery = { __typename?: 'Query', getServicesPaginated: { __typename?: 'ListServicePage', edges: Array<{ __typename?: 'PaginatedServicePageEdge', node?: { __typename?: 'Service', title: string, icon: string, slug: string } | null } | null>, pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null, hasPrevPage?: boolean | null, startCursor?: string | null, endCursor?: string | null } | null } };

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