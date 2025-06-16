import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, PortfolioItem, Stage, Page } from '@/types/content';

const contentDirectory = path.join(process.cwd(), 'content');

export function getAllPosts(): BlogPost[] {
  const postsDirectory = path.join(contentDirectory, 'posts');
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))
    .map(name => {
      const fullPath = path.join(postsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug: name.replace(/\.(md|mdx)$/, ''),
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        content,
        featuredImage: data.featuredImage || '',
        category: data.category || 'Non classé',
        author: data.author || '',
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

export function getAllStages(): Stage[] {
  const stagesDirectory = path.join(contentDirectory, 'stages');
  
  if (!fs.existsSync(stagesDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(stagesDirectory);
  const stages = filenames
    .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))
    .map(name => {
      const fullPath = path.join(stagesDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug: name.replace(/\.(md|mdx)$/, ''),
        title: data.title || '',
        date: data.date || '',
        description: data.description || '',
        location: data.location || '',
        price: data.price || 0,
        maxParticipants: data.maxParticipants,
        content,
        registrationDeadline: data.registrationDeadline,
        featuredImage: data.featuredImage || '',
      } as Stage;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return stages;
}

export function getPageBySlug(slug: string): Page | null {
  const pagesDirectory = path.join(contentDirectory, 'pages');
  const fullPath = path.join(pagesDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title || '',
    content,
    lastModified: data.lastModified,
  } as Page;
} 