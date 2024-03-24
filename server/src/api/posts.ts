import express, { Request, Response } from 'express';
import { IPost, Post } from '../models/Post';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { slug, content } = req.body;
    const post: IPost = new Post({ slug, content });
    await post.save();
    res.status(201).json(post);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const posts: IPost[] = await Post.find().sort({ createdAt: -1 }).select('-content'); // Optionally exclude content for performance
    res.status(200).json(posts);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:slug', async (req: Request, res: Response) => {
  const { slug } = req.params;

  try {
    const post: IPost | null = await Post.findOne({ slug }); // Use slug for query
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { slug, content } = req.body;

  const updateData = { slug, content };

  try {
    const updatedPost = await Post.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(updatedPost);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
