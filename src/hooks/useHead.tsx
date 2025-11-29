import { useEffect } from "react";

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

interface UseHeadProps {
  title?: string;
  description?: string;
  meta_content?: MetaTag[];
}

export const useHead = ({ 
  title = "app", 
  description,
  meta_content = [] 
}: UseHeadProps) => {
  useEffect(() => {
    // Validate inputs
    if (!title && !description && meta_content.length === 0) {
      console.warn('useHead called without any properties to set');
      return;
    }

    // Set document title
    if (title) {
      document.title = title;
    }

    // Auto-include description meta tag if provided
    const allMetaTags: MetaTag[] = [
      ...(description ? [{ name: "description", content: description }] : []),
      ...meta_content
    ];

    const createdElements: HTMLMetaElement[] = [];
    const originalValues = new Map<string, string>();

    // Process meta tags
    allMetaTags.forEach(meta => {
      if (!meta.name && !meta.property) {
        console.warn('Meta tag must have either name or property attribute');
        return;
      }

      const selector = meta.name 
        ? `meta[name="${meta.name}"]` 
        : `meta[property="${meta.property}"]`;
      
      let metaElement = document.querySelector<HTMLMetaElement>(selector);

      if (metaElement) {
        // Store original value
        originalValues.set(selector, metaElement.content);
      } else {
        // Create new element
        metaElement = document.createElement('meta');
        if (meta.name) {
          metaElement.name = meta.name;
        } else if (meta.property) {
          metaElement.setAttribute('property', meta.property);
        }
        document.head.appendChild(metaElement);
        createdElements.push(metaElement);
      }

      // Update content
      metaElement.content = meta.content;
    });

    // Cleanup function
    return () => {
      // Remove created elements
      createdElements.forEach(element => {
        element.remove();
      });

      // Restore original values for existing elements
      originalValues.forEach((originalContent, selector) => {
        const element = document.querySelector<HTMLMetaElement>(selector);
        if (element) {
          element.content = originalContent;
        }
      });
    };
  }, [title, description, meta_content]);
};